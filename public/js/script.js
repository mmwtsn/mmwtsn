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
    console.log(page_width);
    $('#edge').css('border-left-width', page_width);
  }
  border_width();
  $(window).resize(function() {
    border_width();
  });

  var toggleNav = function() {
    var $nav = $('nav'); // This should be the entire sidebar, not just the nav
    var $button = $('#toggle-nav');
    var $article = $('.article');

    var start = {'left':'18.5rem'};
    var end   = {'left':'24px'};
    var width = {'width':'toggle'};
    var zero  = {'left':'0'};

    // TODO - BUG
    // If the "close" button is pressed immediately after
    // the hover callback function is fired, the is(:hidden)
    // calculation is done before the callback animation is
    // complete. This causes a display error.

    // TODO - IMPROVEMENT
    // The "open" animation is not smooth. Each element
    // slides in at a different rate.

    $button.click(function() {
      var $this = $(this);
      if($nav.is(':hidden')) {
        $button.animate(start, 250);
        $nav.animate(width, 250);
        $article.animate(start, 250);
      }
      else {
        $button.animate(end, 250);
        $nav.animate(width, 250);
        $article.animate(zero, 250);
      };
    });

    $nav.hover(function() {
      // On mouseEnter
    }, function() {
      $(this).delay(500).animate(width, 250);
      $button.delay(500).animate(end, 350);
      $article.delay(500).animate(zero, 350);
    });
  };
  toggleNav();

});
