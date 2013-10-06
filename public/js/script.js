$(document).ready(function() {

  var toggleNav = function() {
    var $button   = $('#nav-toggle');
    var $sidebar  = $('.sidebar');
    var $article  = $('.article');

    var sidebar   = {};
    var article   = {};

    sidebar.close = {'left':'-225px'};
    sidebar.close = {'left':'-250px'};
    sidebar.open  = {'left':'0px'};

    article.close = {'left':'11px'};
    article.close = {'left':'16px'};
    article.open  = {'left':'264px'};

    var animating = false;

    $button.on('click touchstart', function() {
      var sidebarClosed = $sidebar.hasClass('closed');
      var $this = $(this);

      if(sidebarClosed) {
        $article.animate(article.open, 250);
        $sidebar.animate(sidebar.open, 250);
        $sidebar.toggleClass('closed');
      }
      else if(!sidebarClosed) {
        $article.animate(article.close, 250);
        $sidebar.animate(sidebar.close, 250);
        $sidebar.toggleClass('closed');
      }
    });

    var $window = $(window);

    if($window.width() <= 500) {
      //
    }

    if(window.location.hash === '#open') {
      $article.css(article.open);
      $sidebar.css(sidebar.open);
    }
  }
  toggleNav();

});
