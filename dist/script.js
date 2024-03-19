// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hbgr = document.querySelector("#hbgr");
const navMenu = document.querySelector("#nav-menu");

hbgr.addEventListener("click", function () {
  hbgr.classList.toggle("hbgr-active");
  navMenu.classList.toggle("hidden");
});
