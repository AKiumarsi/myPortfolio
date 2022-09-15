/*help
h1 = 20"-"(2)
h2 = 15"-"(2)*/

// h1-----------------------------menuIcon-----------------------------
const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", () => {
  const visibility = menuIcon.getAttribute("data-visible");
  const menuIconItem1 = document.getElementById("menuIconItem1");
  const menuIconItem2 = document.getElementById("menuIconItem2");
  const menuIconItem3 = document.getElementById("menuIconItem3");
  const navlinkTextStyle = document.querySelectorAll(".navlink-text-style");
  const nav = document.getElementById("nav");
  const marginNav = document.getElementById("marginNav");

  if (visibility === "true") {
    menuIconItem1.classList.add("menu-icon-item-1-click");
    menuIconItem2.classList.add("menu-icon-item-2-click");
    menuIconItem3.classList.add("menu-icon-item-3-click");
    menuIconItem1.classList.remove("menu-icon-item-1-click2");
    menuIconItem2.classList.remove("menu-icon-item-2-click2");
    menuIconItem3.classList.remove("menu-icon-item-3-click2");
    menuIcon.setAttribute("data-visible", false);

    nav.classList.add("nav-width100");
    marginNav.classList.add("margin100");
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.add("displayNone");
    }

    nav.classList.add("nav-width-tablet");
    
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.remove("displayNone-tablet");
      navlinkTextStyle[x].classList.remove("display-none");
    }
  } else if (visibility === "false") {
    menuIconItem1.classList.remove("menu-icon-item-1-click");
    menuIconItem2.classList.remove("menu-icon-item-2-click");
    menuIconItem3.classList.remove("menu-icon-item-3-click");
    menuIconItem1.classList.add("menu-icon-item-1-click2");
    menuIconItem2.classList.add("menu-icon-item-2-click2");
    menuIconItem3.classList.add("menu-icon-item-3-click2");
    menuIcon.setAttribute("data-visible", true);

    nav.classList.remove("nav-width100");
    marginNav.classList.remove("margin100");
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.remove("displayNone");
    }

    nav.classList.remove("nav-width-tablet");
    
    for (let x = 0; x < navlinkTextStyle.length; x++) {
      navlinkTextStyle[x].classList.add("displayNone-tablet");
    }
  }
});


window.addEventListener("resize", navbarHeight);
navbarHeight();
function navbarHeight() {
  const navbarNav = document.getElementById("navbarNav");
  let heightnav = window.innerHeight;
  navbarNav.style.height = heightnav - 100 + "px";
}
