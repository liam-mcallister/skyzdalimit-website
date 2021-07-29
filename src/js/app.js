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

new Glider(document.querySelector(".glider"), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  rewind: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
      // screens greater than >= 500px
      breakpoint: 500,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 700px
      breakpoint: 700,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 3,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
});
