let dropdown = ["about", "menu", "services", "book"];
let count = 0;
let circle = $(".circle");
let navlinkSlide = gsap.timeline();
let circleAnim = gsap.timeline();

navlinkSlide.from(
  ".slide-in",
  {
    x: -30,
    opacity: 0,
    stagger: 0.1,
    ease: Back.easeOut.config(3)
  },
  "+=.3"
);

circleAnim.to(
  circle,
  {
    clipPath: "circle(150% at 100% 0%)",
    duration: 1,
  },
  "=+0.1"
);

navlinkSlide.pause();
circleAnim.pause();

let dropdownMenu = function () {
  for (let i in dropdown) {
    // hide dropdown menu when site refreshes
    $(`.${dropdown[i]}-dropdown`).addClass("hide");
    // click to show and hide dropdown menu
    $(`.${dropdown[i]}`).click(function () {
      $(`.${dropdown[i]}-dropdown`).slideToggle();
      // rotation of dropdown menu arrows
      $(`.${dropdown[i]}-arrow`).toggleClass("arrow-rotate");
    });
  }
};

// hamburger animation
let hamburgerAnim = function () {
  $(".hamburger").click(function () {
    $(".navlinks").toggleClass("navbar-toggle");
    // rotation of hamburger lines
    $(".line1").toggleClass("line1-rotation");
    $(".line3").toggleClass("line3-rotation");
    $(".line2").toggleClass("line2-opacity");

    count += 1;
    if (count % 2 == 0) {
      navlinkSlide.reverse();
      circleAnim.reverse();
      console.log("closed");
    } else {
      navlinkSlide.restart();
      circleAnim.restart();
      console.log("open");
      dropdownMenu();
    }
  });
};

hamburgerAnim();
