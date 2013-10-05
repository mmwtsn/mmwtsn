$(document).ready(function() {

  // Fade site header + nav when reading
  //var chrome_fade = $(window).scroll(function() {

  $this = $(this);
  $scrollTags = $('header, aside');
  fadePoint = 80;

  if($this.scrollTop() > fadePoint) {
    $scrollTags.fadeOut();
  }
  if($this.scrollTop() <= fadePoint) {
    $scrollTags.fadeIn();
  }

  var border_width = function() {
    page_width = $(window).width();
    $('#edge').css('border-left-width', page_width);
  }
  border_width();
  $(window).resize(function() {
    border_width();
  });

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

    if(animating == false) {
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

      //$nav.hover(function() {
      //  // On mouseEnter
      //  animating = true;
      //}, function() {
      //  $(this).delay(1000).animate(width, 250);
      //  $article.delay(1000).animate(zero, 350);
      //  $button.delay(1000).animate(end, 350, function() {
      //    animating = false;
      //  });
      //});
    }
  }
  toggleNav();

});
