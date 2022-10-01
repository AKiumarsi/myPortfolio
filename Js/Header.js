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
  const settingItemText = document.querySelectorAll(".setting-item-text");

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
    settingItemText.forEach((SIT) => {
      SIT.classList.add("displayNone");
    });

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
    settingItemText.forEach((SIT) => {
      SIT.classList.remove("displayNone");
    });

    // h2---------------change-header-padding-from-right---------------h2
    headerOne.classList.remove("padding-right-small-headerOne");
  }

  // h2---------------NavWidth-tablet---------------h2
  if ((nav.offsetWidth == 230) & (marginNav.offsetWidth <= 992)) {
    // این حالتی است که منو باز بوده و باکلیک بسته می شود در حالت تبلت
    nav.classList.remove("nav-width-tablet");
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.add("displayNone-tablet");
    }
    settingItemText.forEach((SIT) => {
      SIT.classList.add("displayNone-tablet");
    });

    menuDarkBack.classList.remove("menu-dark-back");

    // این حالتی است که منو بسته بوده و باکلیک باز می شود در حالت تبلت
  } else if (marginNav.offsetWidth < 992) {
    nav.classList.add("nav-width-tablet");
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.remove("displayNone-tablet");
      navlinkTextStyle[x].classList.remove("display-none");
    }
    settingItemText.forEach((SIT) => {
      SIT.classList.remove("displayNone-tablet");
      SIT.classList.remove("display-none");
    });

    menuDarkBack.classList.add("menu-dark-back");
  }
});

// h2---------------dark-backgraound-whenNav-expanded--------------h2
menuDarkBack.addEventListener("click", () => {
  nav.classList.remove("nav-width-tablet");
  for (let x = 0; x < navlinkTextStyle.length; x++) {
    navlinkTextStyle[x].classList.add("displayNone-tablet");
  }
  settingItemText.forEach((SIT) => {
    SIT.classList.add("displayNone-tablet");
  });
  menuDarkBack.classList.remove("menu-dark-back");
});

// h1-----------------------------navHeight-----------------------------
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

// h1-----------------------------menu-icon-mobile----------------------------
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

    // h2---------------navHeight-for-mobile--------------h2
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

    // h2---------------navHeight-for-mobile--------------h2
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

// h1-----------------------------navHeight-for-mobile-----------------------------
window.addEventListener("resize", mobileNavHeightF);
mobileNavHeightF();
function mobileNavHeightF() {
  const root = document.querySelector(":root");
  let mobileNavHeight = window.innerHeight - 20 + "px";
  root.style.setProperty("--mobile-nav-height", mobileNavHeight);
}

// h1-----------------------------arrow-up-click-----------------------------
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
    // کلید بازگشت در این حالت منو بسته و با کلیک به بالای صفحه هدایت می شه حالت بدون بازگشت
    arrowUpIcon.setAttribute("href", "#");
  } else if (
    arrowUpIcontrans === "matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)" ||
    arrowUpIcontrans === "matrix(0, -1, 1, 0, 0, 0)"
  ) {
    // کلید بازگشت در این حالت منو باز و باکلیک منو بسته می شه حالت بازگشت
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

// h1-----------------------------Active-linkItem-----------------------------
// وقتی که کلیک می شه اکتیو به اون منقل می شود

let section = document.querySelectorAll(".section-main");
const navItem = document.querySelectorAll("#navItem");
function activeLink(li) {
  navItem.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}

// navItem.forEach((item) =>
//   item.addEventListener("click", function () {
//     activeLink(this);
//   })
// );

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset - 200 && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  });
};

// بسته شدن منو در حالت تبلت و موبایل با کلیک روی آیتم ها
navItem.forEach((NI) => {
  NI.addEventListener("click", () => {
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

// -------------------------ساعت در منو-------------------------------
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
