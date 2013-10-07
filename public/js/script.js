$(document).ready(function() {

  var toggleSidebar = function() {
    var $button   = $('#nav-toggle');
    var $sidebar  = $('.sidebar');
    var $article  = $('.article');
    var $slideable = $('.sidebar, .article');

    $button.on('click touchstart', function() {
      var sidebarClosed = $sidebar.hasClass('closed');

      $slideable.toggleClass('closed');

      if(sidebarClosed) {
      }
      else if(!sidebarclosed) {
      }
    });

    if(window.location.hash === '#open') {
      $slideable.toggleClass('closed');
    }
  }
  toggleSidebar();

});
