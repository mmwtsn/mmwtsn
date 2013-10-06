$(document).ready(function() {

  var toggleNav = function(sidebarClose, aritcleClose) {
    var $button   = $('#nav-toggle');
    var $sidebar  = $('.sidebar');
    var $article  = $('.article');

    var sidebar = {};
    var article = {};

    sidebar.open  = {'left':'0px'};
    sidebar.close = {'left' : sidebarClose};

    article.open  = {'left':'264px'};
    article.close = {'left' : articleClose};

    $button.on('click touchstart', function() {
      var sidebarClosed = $sidebar.hasClass('closed');
      var $this = $(this);

      if(sidebarClosed) {
        $article.animate(article.open, 250);
        $sidebar.animate(sidebar.open, 250);
        $sidebar.toggleClass('closed');
      }
      else if(!sidebarClosed) {
        $article.animate(articleClose, 250);
        $sidebar.animate(sidebarClose, 250);
        $sidebar.toggleClass('closed');
      }
    });

    if(window.location.hash === '#open') {
      $article.css(article.open);
      $sidebar.css(sidebar.open);
    }
  }

  var callToggleNav = function() {
    var $window = $(window);

    if($window.width() > 500) {
      alert('large');
      toggleNav('-250px', '-16px');
    }

    if($window.width() <= 500) {
      alert('small');
      toggleNav('-225px', '11px');
    }
  }
  callToggleNav();

  $window.resize(function() {
    callToggleNav();
  });
});
