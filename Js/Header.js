/*help
h1 = 20"-"(2)
h2 = 15"-"(2)*/

// h1-----------------------------menuIcon-----------------------------
const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener('click' , () => {
    const visibility = menuIcon.getAttribute("data-visible")
    const menuIconItem1 = document.getElementById("menuIconItem1");
    const menuIconItem2 = document.getElementById('menuIconItem2');
    const menuIconItem3 = document.getElementById('menuIconItem3');

    if(visibility === "true"){
        menuIconItem1.classList.add("menu-icon-item-1-click");
        menuIconItem2.classList.add("menu-icon-item-2-click");
        menuIconItem3.classList.add("menu-icon-item-3-click");
        menuIconItem1.classList.remove("menu-icon-item-1-click2");
        menuIconItem2.classList.remove("menu-icon-item-2-click2");
        menuIconItem3.classList.remove("menu-icon-item-3-click2");
        menuIcon.setAttribute("data-visible" , false)
    }else if (visibility === "false"){
        menuIconItem1.classList.remove("menu-icon-item-1-click");
        menuIconItem2.classList.remove("menu-icon-item-2-click");
        menuIconItem3.classList.remove("menu-icon-item-3-click");
        menuIconItem1.classList.add("menu-icon-item-1-click2");
        menuIconItem2.classList.add("menu-icon-item-2-click2");
        menuIconItem3.classList.add("menu-icon-item-3-click2");
        menuIcon.setAttribute("data-visible" , true)
    }

})

