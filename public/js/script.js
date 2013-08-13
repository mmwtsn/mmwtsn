$(document).ready(function() {

  // Fade site header + nav when reading
  $(window).scroll(function() {

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

  // Rotate symbol on hover
  var $nav_button = $('#menu span');
  var $nav = $('#nav');

  $nav_button.hover(function() {
    $nav_button.css({
      'transform' : 'rotate(45deg)'
    });
    $nav.css({
      'display' : 'block'
    });
  }, function() {
    setTimeout(function(){
      $nav_button.css({
        'transform' : 'rotate(0deg)'
      });
      $nav.css({
        'display' : 'none'
      });
    }, 500);
  });

});

