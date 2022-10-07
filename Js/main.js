const homeSecParg = document.getElementById("homeSecParg");

homeSecPargF();
window.addEventListener("resize", homeSecPargF);
function homeSecPargF() {
  const homeSecPargHei = window.getComputedStyle(homeSecParg);
  const bb = homeSecPargHei.getPropertyValue("height");


  if ((window.innerWidth > 576) & (window.innerHeight > "465")) {
    homeSecParg.style.height = window.innerHeight - 151 + "px";
  }
}