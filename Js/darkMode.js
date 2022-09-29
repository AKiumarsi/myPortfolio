// h1-----------------------------Dark-Mode-----------------------------
// با کلیک قراره حالت تاریک روشن شه
const darkModeSetting = document.getElementById("darkModeSetting");

darkModeSetting.addEventListener("click", darkModeSettingF);
function darkModeSettingF() {
  const darkModeVisiblity = darkModeSetting.getAttribute("mode");
  const darkMOdeStyleLink = document.getElementById("darkMOdeStyleLink");

  if (darkModeVisiblity === "false") {
    // حالت روشن بوده و با کلیک تاریک می شود
    darkMOdeStyleLink.setAttribute("href" , "Style/Dark-Mode.css");
    
    darkModeSetting.classList.add("active-setting");

    darkModeSetting.setAttribute("mode", true);
  } else if (darkModeVisiblity === "true") {
    // حالت تاریک بوده و با کلیک روشن می شود
    darkMOdeStyleLink.setAttribute("href" , "");
    darkModeSetting.classList.remove("active-setting");

    darkModeSetting.setAttribute("mode", false);
  }
}
