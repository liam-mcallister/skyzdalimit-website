const body = document.getElementById("body");
const burger = document.getElementById("burger-btn");

// Disable scrolling when navigation menu is open
burger.addEventListener("click", function () {
  if (burger.checked) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
});
