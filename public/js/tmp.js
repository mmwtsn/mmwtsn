$(document).ready(function() {

  var toggleNav = function() {
    alert('function called');
    var $button   = $('#nav-toggle');
    var $sidebar  = $('.sidebar');
    var $article  = $('.article');

    var sidebar = {};
    var article = {};

    var sidebarClose = ''
    var articleClose = ''

    sidebar.open  = {'left' : '0px'};
    sidebar.close = {'left' : sidebarClose};

    article.open  = {'left' : '264px'};
    article.close = {'left' : articleClose};

    $button.on('click touchstart', function() {
      alert('click');
      var sidebarClosed = $sidebar.hasClass('closed');
      var $this = $(this);

      if(sidebarClosed) {
        alert('closed');
        $article.animate(article.open, 250);
        $sidebar.animate(sidebar.open, 250);
        $sidebar.toggleClass('closed');
      }
      else if(!sidebarClosed) {
        var $window = $(window);
        var breakpoint = 600;

        alert("else if");

        if($window.width() > breakpoint) {
          sidebarClose = '-250px';
          articleClose = '-16px';
          alert("big");
        }

        if($window.width() <= breakpoint) {
          sidebarClose = '-225px';
          articleClose = '11px';
          alert("small");
        }

        $article.animate(article.close, 250);
        $sidebar.animate(sidebar.close, 250);
        $sidebar.toggleClass('closed');
      }
    });

    if(window.location.hash === '#open') {
      $article.css(article.open);
      $sidebar.css(sidebar.open);
    }
  }

});
