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

});
