// این برای اولین سکشن یعنی هومه که ارتفاعش و مشخص می کنه
const homeSecParg = document.getElementById("homeSecParg");
homeSecPargF();
window.addEventListener("resize", homeSecPargF);
function homeSecPargF() {
  const homeSecPargHei = window.getComputedStyle(homeSecParg);
  const bb = homeSecPargHei.getPropertyValue("height");

  if (
    (window.innerWidth > 576) &
    (window.innerHeight > 510) &
    (window.innerHeight < 2001) &
    (window.innerWidth < 4001)
  ) {
    homeSecParg.style.height = window.innerHeight - 151 + "px";
  } else if (window.innerWidth <= 576) {
    homeSecParg.style.height = "fit-content"
  }
}

// این برای حذف راهنمای اسکرول با اسکرول کردنه
window.addEventListener("scroll", angleDownScrollF);
window.addEventListener("resize", angleDownScrollF);
angleDownScrollF();
function angleDownScrollF() {
  const angleDownScroll = document.getElementById("angleDownScroll");
  if (scrollY > 100 || window.innerHeight < 500) {
    angleDownScroll.style.display = "none";
  }
}



/* h1-----------------------------------------section3-Skill----------------------------------------- */
const skillSecUL1 = document.getElementById("skillSecUL1");
const skillSecUL1Item = skillSecUL1.querySelectorAll("li");

skillSecUL1Item.forEach((SSU1I) => {
  SSU1I.addEventListener("click", () => {
    skillSecUL1.querySelector(".activeSSU1").classList.remove("activeSSU1");
    SSU1I.classList.add("activeSSU1")
    console.log(SSU1I.length);
  })
})