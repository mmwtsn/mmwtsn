$(document).ready(function() {

  var toggleSidebar = function() {
    var $button   = $('#nav-toggle');
    var $slideable = $('.sidebar, .wrapper');

    $button.on('click touchstart', function() {
      $slideable.toggleClass('closed');
    });

    if(window.location.hash === '#open') {
      $slideable.toggleClass('closed');
    }
  }
  toggleSidebar();

});
