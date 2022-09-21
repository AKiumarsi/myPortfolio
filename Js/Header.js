/*help
h1 = 20"-"(2)
h2 = 15"-"(2)*/

// h1-----------------------------onClickMenu-----------------------------
const menuIcon = document.getElementById("menuIcon");
const body = document.getElementById("body");
const header = document.getElementById("header");

menuIcon.addEventListener("click", () => {
  const visibility = menuIcon.getAttribute("data-visible");
  const menuIconItem1 = document.getElementById("menuIconItem1");
  const menuIconItem2 = document.getElementById("menuIconItem2");
  const menuIconItem3 = document.getElementById("menuIconItem3");
  const navlinkTextStyle = document.querySelectorAll(".navlink-text-style");
  const nav = document.getElementById("nav");
  const marginNav = document.getElementById("marginNav");
  const bodyScroll = scrollY;
  const headerOne = document.getElementById("headerOne");
  const menuDarkBack = document.getElementById("menuDarkBack");

  if (visibility === "true") {
    // این حالتی است که منو باز بوده و باکلیک بسته می شود در حالت دسکتاپ
    menuIcon.setAttribute("data-visible", false);
    // h2---------------menuIcon---------------h2
    menuIconItem1.classList.add("menu-icon-item-1-click");
    menuIconItem2.classList.add("menu-icon-item-2-click");
    menuIconItem3.classList.add("menu-icon-item-3-click");
    menuIconItem1.classList.remove("menu-icon-item-1-click2");
    menuIconItem2.classList.remove("menu-icon-item-2-click2");
    menuIconItem3.classList.remove("menu-icon-item-3-click2");

    // h2---------------NavWidt-desktop---------------h2
    nav.classList.add("nav-width100");
    marginNav.classList.add("margin100");
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.add("displayNone");
    }
    // h2---------------change-header-padding-from-right---------------h2
    headerOne.classList.add("padding-right-small-headerOne");
  } else if (visibility === "false") {
    // این حالتی است که منو بسته بوده و باکلیک باز می شود در حالت دسکتاپ
    menuIcon.setAttribute("data-visible", true);
    // h2---------------menuIcon---------------h2
    menuIconItem1.classList.remove("menu-icon-item-1-click");
    menuIconItem2.classList.remove("menu-icon-item-2-click");
    menuIconItem3.classList.remove("menu-icon-item-3-click");
    menuIconItem1.classList.add("menu-icon-item-1-click2");
    menuIconItem2.classList.add("menu-icon-item-2-click2");
    menuIconItem3.classList.add("menu-icon-item-3-click2");

    // h2---------------NavWidth-desktop---------------h2
    nav.classList.remove("nav-width100");
    marginNav.classList.remove("margin100");
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.remove("displayNone");
    }

    // h2---------------change-header-padding-from-right---------------h2
    headerOne.classList.remove("padding-right-small-headerOne");
  }

  // h2---------------NavWidth-tablet---------------h2
  if ((nav.offsetWidth == 280) & (marginNav.offsetWidth <= 992)) {
    // این حالتی است که منو باز بوده و باکلیک بسته می شود در حالت تبلت
    nav.classList.remove("nav-width-tablet");
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.add("displayNone-tablet");
    }

    menuDarkBack.classList.remove("menu-dark-back");

    // این حالتی است که منو بسته بوده و باکلیک باز می شود در حالت تبلت
  } else if (marginNav.offsetWidth < 992) {
    nav.classList.add("nav-width-tablet");
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.remove("displayNone-tablet");
      navlinkTextStyle[x].classList.remove("display-none");
    }
    menuDarkBack.classList.add("menu-dark-back");
  }
});

menuDarkBack.addEventListener("click", () => {
  nav.classList.remove("nav-width-tablet");
  for (let x = 0; x < navlinkTextStyle.length; x++) {
    navlinkTextStyle[x].classList.add("displayNone-tablet");
  }
  menuDarkBack.classList.remove("menu-dark-back");
});

// h1-----------------------------navHeight-----------------------------
window.addEventListener("resize", navbarHeight);
navbarHeight();
function navbarHeight() {
  const navbarNav = document.getElementById("navbarNav");
  let heightnav = window.innerHeight;
  navbarNav.style.height = heightnav + "px";
}
