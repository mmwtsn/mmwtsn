// Toggles the visibility of the sidebar element
function toggleSlide() {
    // Cache HTML elements to be interacted with later
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementById("nav-toggle");

    var toggleClass = "closed";

    // Toggle the "closed" class on <body> when #nav-toggle is clicked
    button.onclick = function() {
        if (body.classList.contains(toggleClass)) {
            body.classList.remove(toggleClass);
        }
        else {
            body.classList.add(toggleClass);
        }
    };

    // Prevent CSS3 Transition from firing before DOM is completely drawn in WebKit
    window.onload = function(){
        body.classList.add("ready");
    };
}
toggleSlide();

