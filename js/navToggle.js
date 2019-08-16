const link = document.querySelectorAll(".nav-mobile"),
  twitter = document.querySelector(".twitter"),
  facebook = document.querySelector(".facebook"),
  toggleCenter = document.querySelector(".nav__toggle-icon"),
  toggleBefore = document.querySelector(".nav__toggle-icon-before"),
  toggleAfter = document.querySelector(".nav__toggle-icon-after"),
  container = document.querySelector(".container"),
  dkOverlay = document.querySelector(".dark-overlay");

function navToggle() {
  const nav = document.querySelector(".navigation__list-mobile");

  // Check if container has no-scroll class
  if (!container.classList.contains("no-scroll")) {
    container.classList.add("no-scroll");
    dkOverlay.classList.add("overlay-transition");
    nav.classList.add("nav-transition");
    link.forEach(x => {
      x.classList.add("link-transition");
    });
    twitter.classList.add("icon-transition");
    facebook.classList.add("icon-transition");
    toggleCenter.classList.add("navigation-transition");
    toggleBefore.classList.add("nav-before-transition");
    toggleAfter.classList.add("nav-after-transition");
  } else {
    container.classList.remove("no-scroll");
    dkOverlay.classList.remove("overlay-transition");
    nav.classList.remove("nav-transition");
    link.forEach(x => {
      x.classList.remove("link-transition");
    });
    twitter.classList.remove("icon-transition");
    twitter.classList.remove("icon-transition");
    toggleCenter.classList.remove("navigation-transition");
    toggleBefore.classList.remove("nav-before-transition");
    toggleAfter.classList.remove("nav-after-transition");
  }
}

// ADD EVENT LISTENER TO UL
const nav = document.querySelector(".navigation__list-mobile");

nav.addEventListener("click", closeNav);

function closeNav() {
  // REMOVE TRANSITION PROPERTIES
  dkOverlay.classList.remove("overlay-transition");
  container.classList.remove("no-scroll");
  nav.classList.remove("nav-transition");
  link.forEach(x => {
    x.classList.remove("link-transition");
  });
  twitter.classList.remove("icon-transition");
  facebook.classList.remove("icon-transition");
  toggleCenter.classList.remove("navigation-transition");
  toggleBefore.classList.remove("nav-before-transition");
  toggleAfter.classList.remove("nav-after-transition");
}
