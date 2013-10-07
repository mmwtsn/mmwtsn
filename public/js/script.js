$(document).ready(function() {

  var toggleNav = function(sidebarClose, articleClose) {
    var $button   = $('#nav-toggle');
    var $sidebar  = $('.sidebar');
    var $article  = $('.article');

    var sidebar = {};
    var article = {};

    sidebar.open  = {'left' : '0px'};
    sidebar.close = {'left' : '-250px'};

    article.open  = {'left' : '264px'};
    article.close = {'left' : '-16px'};

    $button.on('click touchstart', function() {
      var sidebarClosed = $sidebar.hasClass('closed');
      var $this = $(this);

      if(sidebarClosed) {
        $article.animate(article.open, 250);
        $sidebar.animate(sidebar.open, 250);
        $sidebar.toggleClass('closed');
      }
      else if(!sidebarClosed) {
        if($(window).width() <= 600) {
          $article.animate({'left':'11px'}, 250);
          $sidebar.animate({'left':'-225px'}, 250);
          $sidebar.toggleClass('closed');
        }
        if($(window).width() > 600) {
          $article.animate(article.close, 250);
          $sidebar.animate(sidebar.close, 250);
          $sidebar.toggleClass('closed');
        }
      }
    });

    if(window.location.hash === '#open') {
      $article.css(article.open);
      $sidebar.css(sidebar.open);
    }
  }

  var callToggleNav = function() {
    var $window = $(window);
    var breakpoint = 600;

    if($window.width() > breakpoint) {
      toggleNav('-250px', '-16px');
    }

    if($window.width() <= breakpoint) {
      toggleNav('-225px', '11px');
    }
  }
  callToggleNav();

});
