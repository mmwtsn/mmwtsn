(function() {

    // ----------
    // TOGGLE NAV
    // ----------

    // Cache HTML elements to be interacted with later
    var body   = document.getElementsByTagName("body")[0];
    var button = document.getElementById("nav-toggle");

    // Toggle the "closed" class on <body> when #nav-toggle is clicked
    button.onclick = function() {
        var toggleClass = "closed";

        if (body.classList.contains(toggleClass)) {
            body.classList.remove(toggleClass);
        }
        else {
            body.classList.add(toggleClass);
        }
    };

    // ---------------------------------
    // PREVENT RENDERING ANIMATION FLASH
    // ---------------------------------

    // Prevent CSS3 Transition from firing before DOM is completely drawn in WebKit
    window.onload = function() {
        body.classList.add("ready");
    };

})();

