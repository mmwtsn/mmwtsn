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
  });

});

