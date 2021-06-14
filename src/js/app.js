const body = document.getElementById("body");
const burger = document.getElementById("burger-btn");
const navLinks = document.querySelectorAll(".nav-item");

// Disable scrolling when navigation menu is open
burger.addEventListener("click", function () {
    if (burger.checked) {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove("no-scroll");
    }
});

// Close navigation menu when link is clicked
navLinks.forEach(function (items) {
    items.addEventListener("click", function () {
        burger.checked = false;
        body.classList.remove("no-scroll");
    });
});