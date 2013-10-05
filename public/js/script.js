$(document).ready(function() {

  var toggleNav = function() {
    var $button  = $('#nav-toggle');
    var $aside   = $('aside');
    var $article = $('.article');

    var aside   = {};
    var article = {};

    aside.close = {'left':'-250px'};
    aside.open = {'left':'0px'};

    article.close = {'left':'0px'};
    article.open = {'left':'255px'};

    var animating = false;

    $button.click(function() {
      var asideClosed = $aside.hasClass('closed');
      var $this = $(this);

      if(asideClosed) {
        $article.animate(article.open, 250);
        $aside.animate(aside.open, 250);
        $aside.toggleClass('closed');
      }
      else if(!asideClosed) {
        $article.animate(article.close, 250);
        $aside.animate(aside.close, 250);
        $aside.toggleClass('closed');
      }
    });
  }
  toggleNav();

});
