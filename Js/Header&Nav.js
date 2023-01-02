// SCOPE: onClickMenu-desktop & tablet
const menuIcon = document.getElementById("menuIcon");
const body = document.getElementById("body");
const header = document.getElementById("header");

changeVisibility();
window.addEventListener("resize", changeVisibility);
function changeVisibility() {
  let navlinkTextStyle = document.getElementById("navlinkTextStyle"),
    navlinkTextStyleCss = window.getComputedStyle(navlinkTextStyle),
    navlinkTextStyleDisplay = navlinkTextStyleCss.getPropertyValue("display");
  if (window.innerWidth > 992) {
    if (navlinkTextStyleDisplay === "block") {
      menuIcon.setAttribute("data-visible", true);
    } else if (navlinkTextStyleDisplay === "none") {
      menuIcon.setAttribute("data-visible", false);
    }
  } else if (window.innerWidth <= 992) {
    if (navlinkTextStyleDisplay === "block") {
      menuIcon.setAttribute("data-visible", true);
    } else if (navlinkTextStyleDisplay === "none") {
      menuIcon.setAttribute("data-visible", false);
    }
  }
}

menuIcon.addEventListener("click", () => {
  const visibility = menuIcon.getAttribute("data-visible");
  const menuIconItem1 = document.getElementById("menuIconItem1");
  const menuIconItem2 = document.getElementById("menuIconItem2");
  const menuIconItem3 = document.getElementById("menuIconItem3");
  const navlinkTextStyle = document.querySelectorAll(".navlink-text-style");
  const nav = document.getElementById("nav");
  const width = document.getElementById("width");
  const marginNav = document.getElementById("marginNav");
  const bodyScroll = scrollY;
  const headerOne = document.getElementById("headerOne");
  const menuDarkBack = document.getElementById("menuDarkBack");
  const settingItemText = document.querySelectorAll(".setting-item-text");

  if (visibility === "true") {
    menuIcon.setAttribute("data-visible", false);
    if (window.innerWidth > 992) {
      closeDesktop();
      function closeDesktop() {
        width.classList.add("nav-width100");
        for (let x = 0; x < navlinkTextStyle.length; x++) {
          navlinkTextStyle[x].classList.add("displayNone");
        }
        settingItemText.forEach((SIT) => {
          SIT.classList.add("displayNone");
        });
        headerOne.classList.add("padding-right-small-headerOne");
      }
    } else if (window.innerWidth <= 992) {
      closeTablet();
      function closeTablet() {
        width.classList.remove("nav-width-tablet");
        for (let x = 0; x < navlinkTextStyle.length; x++) {
          navlinkTextStyle[x].classList.remove("displayBlock");
        }
        settingItemText.forEach((SIT) => {
          SIT.classList.remove("displayBlock");
        });
        menuDarkBack.classList.remove("menu-dark-back");

        navFix.classList.remove("fix-zindex");
      }
    }
  } else if (visibility === "false") {
    menuIcon.setAttribute("data-visible", true);
    if (window.innerWidth > 992) {
      openDesktop();
      function openDesktop() {
        width.classList.remove("nav-width100");
        for (let x = 0; x < navlinkTextStyle.length; x++) {
          navlinkTextStyle[x].classList.remove("displayNone");
        }
        settingItemText.forEach((SIT) => {
          SIT.classList.remove("displayNone");
        });
        headerOne.classList.remove("padding-right-small-headerOne");
      }
    } else if (window.innerWidth <= 992) {
      openTablet();
      function openTablet() {
        width.classList.add("nav-width-tablet");
        for (let x = 0; x < navlinkTextStyle.length; x++) {
          navlinkTextStyle[x].classList.add("displayBlock");
        }
        settingItemText.forEach((SIT) => {
          SIT.classList.add("displayBlock");
        });
        menuDarkBack.classList.add("menu-dark-back");

        navFix.classList.add("fix-zindex");
      }
    }
  }
});


// SCOPE: dark-backgraound-whenNav-expanded
menuDarkBack.addEventListener("click", () => {
  const settingItemText = document.querySelectorAll(".setting-item-text");
  const navlinkTextStyle = document.querySelectorAll(".navlink-text-style");
  width.classList.remove("nav-width-tablet");
  for (let x = 0; x < navlinkTextStyle.length; x++) {
    navlinkTextStyle[x].classList.add("displayNone-tablet");
  }
  settingItemText.forEach((SIT) => {
    SIT.classList.add("displayNone-tablet");
  });
  menuDarkBack.classList.remove("menu-dark-back");
});

// SCOPE: navHeight
window.addEventListener("resize", navbarHeight);
navbarHeight();
function navbarHeight() {
  const navbarNav = document.getElementById("navbarNav");
  let heightnav = window.innerHeight;
  if (window.innerWidth > 576) {
    navbarNav.style.height = heightnav - 63 - 80 + "px";
  } else if (window.innerWidth < 577) {
    navbarNav.style.height = "fit-content";
  }
}

// SCOPE: menu-icon-mobile
const menuIconMobile = document.getElementById("menuIconMobile");

menuIconMobile.addEventListener("click", () => {
  const visibilityMobile = menuIconMobile.getAttribute("data-visible");
  const menuIconItem1Mobile = document.getElementById("menuIconItem1Mobile");
  const menuIconItem2Mobile = document.getElementById("menuIconItem2Mobile");
  const menuIconItem3Mobile = document.getElementById("menuIconItem3Mobile");
  const menuIconItem4Mobile = document.getElementById("menuIconItem4Mobile");
  const root = document.querySelector(":root");
  const taskbarMobile = document.getElementById("taskbarMobile");
  const arrowUpIcon = document.getElementById("arrowUpIcon");
  const searchBoxDiv = document.getElementById("searchBoxDiv");
  const dateClockMenu = document.getElementById("dateClockMenu");
  const searchUl = document.getElementById("searchUl");

  if (visibilityMobile === "false") {
    // NOTE: The menu is false and closed, the mobile opens with a click
    // SCOPE: menuiconanimate {(in: menu-icon-mobile)}
    menuIconItem1Mobile.classList.add("menu-icon-item1-mobile-animate");
    menuIconItem2Mobile.classList.add("menu-icon-item2-mobile-animate");
    menuIconItem3Mobile.classList.add("menu-icon-item3-mobile-animate");
    menuIconItem4Mobile.classList.add("menu-icon-item4-mobile-animate");
    menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate2");
    menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate2");
    menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate2");
    menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate2");

    // SCOPE: navHeight-for-mobile {(in: menu-icon-mobile)}
    nav.classList.add("mobile-nav-height");

    taskbarMobile.classList.add("taskbar-borderup");

    navbarNav.classList.add("navbar-nav-block-mobile");

    arrowUpIcon.classList.add("arrowup-toleft");

    menuDarkBack.classList.add("menu-dark-back");

    searchBoxDiv.classList.add("display-none-search-div");

    dateClockMenu.classList.add("display-none-date");

    searchUl.classList.remove("disply-none-searchUl");

    menuIconMobile.setAttribute("data-visible", true);
  } else if (visibilityMobile === "true") {
    // NOTE: The menu is open and closes with a click

    // SCOPE: menuiconanimate {(in: menu-icon-mobile)}
    menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate");
    menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate");
    menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate");
    menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate");
    menuIconItem1Mobile.classList.add("menu-icon-item1-mobile-animate2");
    menuIconItem2Mobile.classList.add("menu-icon-item2-mobile-animate2");
    menuIconItem3Mobile.classList.add("menu-icon-item3-mobile-animate2");
    menuIconItem4Mobile.classList.add("menu-icon-item4-mobile-animate2");

    // SCOPE: navHeight-for-mobile {(in: menu-icon-mobile)}
    nav.classList.remove("mobile-nav-height");

    taskbarMobile.classList.remove("taskbar-borderup");

    navbarNav.classList.remove("navbar-nav-block-mobile");

    arrowUpIcon.classList.remove("arrowup-toleft");
    menuDarkBack.classList.remove("menu-dark-back");

    searchBoxDiv.classList.remove("display-none-search-div");

    dateClockMenu.classList.remove("display-none-date");

    searchUl.classList.add("disply-none-searchUl");

    menuIconMobile.setAttribute("data-visible", false);
  }
});

// SCOPE: navHeight-for-mobile
window.addEventListener("resize", mobileNavHeightF);
mobileNavHeightF();
function mobileNavHeightF() {
  const root = document.querySelector(":root");
  let mobileNavHeight = window.innerHeight - 20 + "px";
  root.style.setProperty("--mobile-nav-height", mobileNavHeight);
}

// SCOPE: arrow-up-click
const arrowUpIcon = document.getElementById("arrowUpIcon");
arrowUpIcon.addEventListener("click", () => {
  const arrowUpIcontrans = getComputedStyle(arrowUpIcon).getPropertyValue(
    "transform"
  );
  const menuIconItem1Mobile = document.getElementById("menuIconItem1Mobile");
  const menuIconItem2Mobile = document.getElementById("menuIconItem2Mobile");
  const menuIconItem3Mobile = document.getElementById("menuIconItem3Mobile");
  const menuIconItem4Mobile = document.getElementById("menuIconItem4Mobile");
  const root = document.querySelector(":root");
  const taskbarMobile = document.getElementById("taskbarMobile");
  const nav = document.getElementById("nav");
  const navbarNav = document.getElementById("navbarNav");

  if (arrowUpIcontrans == "matrix(1, 0, 0, 1, 0, 0)") {
    // NOTE: (up key) in this case, the menu is closed and it is directed to the top of the page by clicking. (TO UP)
    arrowUpIcon.setAttribute("href", "#");
  } else if (
    arrowUpIcontrans === "matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)" ||
    arrowUpIcontrans === "matrix(0, -1, 1, 0, 0, 0)"
  ) {
    //NOTE: (return key) in this mode, the menu is opened and the menu is closed by clicking (return mode)
    menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate");
    menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate");
    menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate");
    menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate");

    nav.classList.remove("mobile-nav-height");

    taskbarMobile.classList.remove("taskbar-borderup");

    navbarNav.classList.remove("navbar-nav-block-mobile");

    arrowUpIcon.classList.remove("arrowup-toleft");
    arrowUpIcon.setAttribute("href", "#don'tgoup");

    menuDarkBack.classList.remove("menu-dark-back");

    menuIconMobile.setAttribute("data-visible", false);
  }
});

// SCOPE: Active-linkItem
// NOTE: When it is clicked, the active will be transferred to it

let section = document.querySelectorAll(".section-main");
const navItem = document.querySelectorAll("#navItem");
function activeLink(li) {
  navItem.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset - 150 && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  });
};

// NOTE: Closing the menu in tablet and mobile mode by clicking on the items
navItem.forEach((NI) => {
  NI.addEventListener("click", () => {
    const navlinkTextStyle = document.querySelectorAll(".navlink-text-style");
    if (window.innerWidth <= 992) {
      const menuIconItem1Mobile = document.getElementById(
        "menuIconItem1Mobile"
      );
      const menuIconItem2Mobile = document.getElementById(
        "menuIconItem2Mobile"
      );
      const menuIconItem3Mobile = document.getElementById(
        "menuIconItem3Mobile"
      );
      const menuIconItem4Mobile = document.getElementById(
        "menuIconItem4Mobile"
      );
      const settingItemText = document.querySelectorAll(".setting-item-text");
      menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate");
      menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate");
      menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate");
      menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate");
      nav.classList.remove("mobile-nav-height");
      menuIcon.setAttribute("data-visible", false);

      taskbarMobile.classList.remove("taskbar-borderup");

      navbarNav.classList.remove("navbar-nav-block-mobile");

      arrowUpIcon.classList.remove("arrowup-toleft");
      menuDarkBack.classList.remove("menu-dark-back");

      searchBoxDiv.classList.remove("display-none-search-div");

      menuIconMobile.setAttribute("data-visible", false);
      nav.classList.remove("nav-width-tablet");

      for (let x = 0; x < navlinkTextStyle.length; x++) {
        navlinkTextStyle[x].classList.add("displayNone-tablet");
      }

      settingItemText.forEach((SIT) => {
        SIT.classList.add("displayNone-tablet");
      });
    }
  });
});

// SCOPE: Clock in the menu
body.addEventListener("load", startTime());
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  let bb = (document.getElementById("dateClockMenu").innerHTML =
    h + ":" + m + ":" + s);
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
