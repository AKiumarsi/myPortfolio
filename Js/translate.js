var dataTranslate = {
  english: {

    // --------------------------------Header-Nav-----------------------------------
    tranTR: "Trnaslate",
    darkTR: "Dark mode",
    homeTR: "Home",
    aboutTR: "About",
    skillTR: "Skill",
    schoolTR: "Education",
    projectsTR: "Projects",
    servicesTR: "Services",
    contactTR: "Contact Us",
    addTR: "New",

    // --------------------------------section1-home-----------------------------------
    homeHeaderTR: "Home",
    homeH3TR1: "Hello, I'm",
    homeH3TR2: "Abolfazl",
    homeH3TR3: "",
    homePTR:
      "I am interested in front-end and work in this field;\
      Honestly, I haven't had time to find a slogan for myself yet",
    homeResTR: "Resume",
    scrollDTTR: "Scroll down",
  },
  persian: {

    // --------------------------------Header-Nav-----------------------------------
    tranTR: "ترجمه صفحه",
    darkTR: "حالت تاریک",
    homeTR: "خانه",
    aboutTR: "درباره من",
    skillTR: "مهارت ها",
    schoolTR: "تحصیلات",
    projectsTR: "پروژه ها",
    servicesTR: "خدمات",
    contactTR: "راه ارتباطی",
    addTR: "جدید",

    // --------------------------------section1-home-----------------------------------
    homeHeaderTR: "خانه",
    homeH3TR1: "سلام، من",
    homeH3TR2: "ابوالفضل",
    homeH3TR3: "هستم",
    homePTR:
      "به فرانت-اند علاقه داشته و در این زمینه فعالیت می کنم؛\
        راستش هنوز وقت نکردم برای خودم شعاری پیدا کنم",
    homeResTR: "دانلود رزومه",
    scrollDTTR: "به پایین بکشید",
  },
};

const translate = document.getElementById("translate");

translate.addEventListener("click", translateF);

function translateF() {
  const tranST = document.getElementById("tranST");
  const translateVlaue = translate.getAttribute("language");
  const tranTR = document.querySelector(".tran-tr");
  const darkTR = document.querySelector(".darkTR");
  const aboutTR = document.querySelector(".aboutTR");
  const skillTR = document.querySelector(".skillTR");
  const schoolTR = document.querySelector(".schoolTR");
  const projectsTR = document.querySelector(".projectsTR");
  const servicesTR = document.querySelector(".servicesTR");
  const contactTR = document.querySelector(".contactTR");
  const addTR = document.querySelector(".addTR");
  const homeTR = document.querySelector(".homeTR");
  const homeHeaderTR = document.querySelector(".homeHeaderTR");
  const homeH3TR1 = document.querySelector(".homeH3TR span:nth-child(1)");
  const homeH3TR2 = document.querySelector(".homeH3TR span:nth-child(2)");
  const homeH3TR3 = document.querySelector(".homeH3TR span:nth-child(3)");
  const homePTR = document.querySelector(".homePTR");
  const homeResTR = document.querySelector(".homeResTR");
  const scrollDTTR = document.querySelector(".scrollDTTR");

  if (translateVlaue === "persian") {
    translate.classList.remove("active-TR-setting");
    tranST.setAttribute("href", "");
    // --------------------------------Header-Nav-----------------------------------
    tranTR.textContent = dataTranslate[translateVlaue].tranTR;
    darkTR.textContent = dataTranslate[translateVlaue].darkTR;
    homeTR.textContent = dataTranslate[translateVlaue].homeTR;
    aboutTR.textContent = dataTranslate[translateVlaue].aboutTR;
    skillTR.textContent = dataTranslate[translateVlaue].skillTR;
    schoolTR.textContent = dataTranslate[translateVlaue].schoolTR;
    projectsTR.textContent = dataTranslate[translateVlaue].projectsTR;
    servicesTR.textContent = dataTranslate[translateVlaue].servicesTR;
    contactTR.textContent = dataTranslate[translateVlaue].contactTR;
    addTR.textContent = dataTranslate[translateVlaue].addTR;

    // --------------------------------section1-home-----------------------------------
    homeHeaderTR.textContent = dataTranslate[translateVlaue].homeHeaderTR;
    homeH3TR1.textContent = dataTranslate[translateVlaue].homeH3TR1;
    homeH3TR2.textContent = dataTranslate[translateVlaue].homeH3TR2;
    homeH3TR3.textContent = dataTranslate[translateVlaue].homeH3TR3;
    homePTR.textContent = dataTranslate[translateVlaue].homePTR;
    homeResTR.textContent = dataTranslate[translateVlaue].homeResTR;
    scrollDTTR.textContent = dataTranslate[translateVlaue].scrollDTTR;

    translate.setAttribute("language", "english");
  } else if (translateVlaue === "english") {
    translate.classList.add("active-TR-setting");
    tranST.setAttribute("href", "Style/Translaate-Style.css");

    // --------------------------------Header-Nav-----------------------------------
    tranTR.textContent = dataTranslate[translateVlaue].tranTR;
    darkTR.textContent = dataTranslate[translateVlaue].darkTR;
    homeTR.textContent = dataTranslate[translateVlaue].homeTR;
    aboutTR.textContent = dataTranslate[translateVlaue].aboutTR;
    skillTR.textContent = dataTranslate[translateVlaue].skillTR;
    schoolTR.textContent = dataTranslate[translateVlaue].schoolTR;
    projectsTR.textContent = dataTranslate[translateVlaue].projectsTR;
    servicesTR.textContent = dataTranslate[translateVlaue].servicesTR;
    contactTR.textContent = dataTranslate[translateVlaue].contactTR;
    addTR.textContent = dataTranslate[translateVlaue].addTR;

    // --------------------------------section1-home-----------------------------------
    homeHeaderTR.textContent = dataTranslate[translateVlaue].homeHeaderTR;
    homeH3TR1.textContent = dataTranslate[translateVlaue].homeH3TR1;
    homeH3TR2.textContent = dataTranslate[translateVlaue].homeH3TR2;
    homeH3TR3.textContent = dataTranslate[translateVlaue].homeH3TR3;
    homePTR.textContent = dataTranslate[translateVlaue].homePTR;
    homeResTR.textContent = dataTranslate[translateVlaue].homeResTR;
    scrollDTTR.textContent = dataTranslate[translateVlaue].scrollDTTR;

    translate.setAttribute("language", "persian");
  }
}
