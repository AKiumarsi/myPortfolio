/*help
h1 = 20"-"(2)
h2 = 15"-"(2)*/

// h1-----------------------------onClickMenu-desktop & tablet-----------------------------
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

// h2---------------dark-backgraound-whenNav-expanded--------------h2
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

// h1-----------------------------menu-icon-mobile----------------------------
const menuIconMobile = document.getElementById("menuIconMobile");

menuIconMobile.addEventListener("click", () => {
  const visibilityMobile = menuIconMobile.getAttribute("data-visible");
  const menuIconItem1Mobile = document.getElementById("menuIconItem1Mobile");
  const menuIconItem2Mobile = document.getElementById("menuIconItem2Mobile");
  const menuIconItem3Mobile = document.getElementById("menuIconItem3Mobile");
  const menuIconItem4Mobile = document.getElementById("menuIconItem4Mobile");
  const root = document.querySelector(":root");

  if (visibilityMobile === "false") {
    // منو فالس و بسته می باشد با کلیک باز می شود موبایل
    // h2---------------menuiconanimate--------------h2
    menuIconItem1Mobile.classList.add("menu-icon-item1-mobile-animate");
    menuIconItem2Mobile.classList.add("menu-icon-item2-mobile-animate");
    menuIconItem3Mobile.classList.add("menu-icon-item3-mobile-animate");
    menuIconItem4Mobile.classList.add("menu-icon-item4-mobile-animate");
    menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate2");
    menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate2");
    menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate2");
    menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate2");

    // h1-----------------------------navHeight-for-mobile-----------------------------
    nav.classList.add("mobile-nav-height");

    menuIconMobile.setAttribute("data-visible", true);
  } else if (visibilityMobile === "true") {
    // منو باز بوده و با کلیک بسته می شود موبایل

    // h2---------------menuiconanimate--------------h2
    menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate");
    menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate");
    menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate");
    menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate");
    menuIconItem1Mobile.classList.add("menu-icon-item1-mobile-animate2");
    menuIconItem2Mobile.classList.add("menu-icon-item2-mobile-animate2");
    menuIconItem3Mobile.classList.add("menu-icon-item3-mobile-animate2");
    menuIconItem4Mobile.classList.add("menu-icon-item4-mobile-animate2");

    // h1-----------------------------navHeight-for-mobile-----------------------------
    nav.classList.remove("mobile-nav-height");

    menuIconMobile.setAttribute("data-visible", false);
  }
});

// h1-----------------------------navHeight-for-mobile-----------------------------
window.addEventListener("resize", mobileNavHeightF);
mobileNavHeightF();
function mobileNavHeightF() {
  const root = document.querySelector(":root");
  let mobileNavHeight = window.innerHeight - 20 + "px";
  root.style.setProperty("--mobile-nav-height", mobileNavHeight);
}
