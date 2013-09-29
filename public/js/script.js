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
    $nav = $('nav');
    $button = $('#toggle-nav');

    var start = {'left':'18.5rem'};
    var end   = {'left':'1rem'};
    var width = {'width':'toggle'};

    $button.click(function() {
      var $this = $(this);
      if($nav.is(':hidden')) {
        $button.animate(start, 250);
        $nav.animate(width, 250);
      }
      else {
        $button.animate(end, 250);
        $nav.animate(width, 250);
      };
    });

    $nav.hover(function() {
      // On mouseEnter
    }, function() {
      $button.delay(500).animate(end, 350);
      $(this).delay(500).animate(width, 350);
    });
  };
  toggleNav();

});
