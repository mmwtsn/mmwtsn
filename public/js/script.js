var toggleSlide = function() {
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementById("nav-toggle");

    toggleClosed = function() {

        if (body.classList.contains("closed")) {
            body.classList.remove("closed");
        }
        else {
            body.classList.add("closed");
        }
    };

    button.onclick = toggleClosed;
}
toggleSlide();

