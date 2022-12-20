const valuesItems = document.querySelectorAll(".values-item");
const uniaLogo = document.querySelector(".unia-logo");

uniaLogo.addEventListener("click", () => {
  window.open("http://uniatransportu.pl", "_blank").focus();
});

[...valuesItems].forEach((item, index) => {
  item.addEventListener("click", () => {
    [...valuesItems]
      .filter((i, key) => key !== index)
      .forEach((item) => {
        item.children[1].classList.add("hide");
        item.children[0].children[2].children[0].classList.remove(
          "rotate-plus"
        );
      });
    item.children[1].classList.toggle("hide");
    item.children[0].children[2].children[0].classList.toggle("rotate-plus");
  });
});

// Carousel

$(".team__inner").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: ".next-btn",
  prevArrow: ".previous-btn",
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
