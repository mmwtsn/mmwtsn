// Fade site header + nav when reading
$(window).scroll(function() {

  $this = $(this);
  $scrollTags = $('header, aside');
  fadePoint = 195;

  if($this.scrollTop() > fadePoint) {
    $scrollTags.fadeOut();
  }
  if($this.scrollTop() <= fadePoint) {
    $scrollTags.fadeIn();
  }
});

