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

    // --------------------------------section2-about-----------------------------------
    aboutHeaderTR: "About Me",
    aboutH3TR: "Front-end developer",
    aboutH3JuTR: "Junior",
    aboutsecpTR: "Considering my great passion for the field of programming, I intend to continue the front-end path so that I can achieve sufficient expertise;",
    aboutsecta1TR: "For more information",
    aboutsecta2TR: "Learning period:",
    aboutsecta3_1TR: "for",
    aboutsecta3_2TR: "months from",
    aboutsecta3_3TR: " 1400/9/10",
    aboutsecta3_4TR: "The developer of the Rushdana",
    aboutsecta4TR: "Skills:",
    aboutsecta5TR: "Projects:",
    aboutsecta6TR: "Certificates:",
    aboutsecta7TR: "internship",
    aboutsecta8TR: "Remote work intern of Kiaob company",

    // --------------------------------section3-Skill-----------------------------------
    skillHeaderTR: "Skills",
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

    // --------------------------------section2-about-----------------------------------
    aboutHeaderTR: "درباره من",
    aboutH3TR: "توسعه دهنده فرانت-اند",
    aboutH3JuTR: "جونیور",
    aboutsecpTR: " با توجه به علاقه و اشتیاق فراوان اینجانب به عرصه کامپیوتر و برنامه نویسی وانتخاب\
    شاخه\
    فرانت- اند، قصد ادامه این مسیر را داشته تا بتوانم به تخصص کافی دست پیدا کنم؛ و تاجایی\
    که می توانم به هم نوعانم کمک کنم.",
    aboutsecta1TR: "جهت آشنایی بیشتر",
    aboutsecta2TR: "مدت یادگیری:",
    aboutsecta3_1TR: "به مدت",
    aboutsecta3_2TR: "ماه از تاریخ",
    aboutsecta3_3TR: " 1400/9/10",
    aboutsecta3_4TR: " رشدآموز پلتفرم توانمندسازی رشدانا",
    aboutsecta4TR: "مهارت ها:",
    aboutsecta5TR: "پروژه ها:",
    aboutsecta6TR: "مدارک:",
    aboutsecta7TR: "کارآموزی",
    aboutsecta8TR: "کارآموز دورکار شرکت کیاوب",

    // --------------------------------section3-Skill-----------------------------------
    skillHeaderTR: "مهارت ها",
  },
};

const translate = document.getElementById("translate");
const translateSvg = translate.querySelector("svg");

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
  const homeTR = document.querySelector(".homeTR");
  const homeHeaderTR = document.querySelector(".homeHeaderTR");
  const homeH3TR1 = document.querySelector(".homeH3TR span:nth-child(1)");
  const homeH3TR2 = document.querySelector(".homeH3TR span:nth-child(2)");
  const homeH3TR3 = document.querySelector(".homeH3TR span:nth-child(3)");
  const homePTR = document.querySelector(".homePTR");
  const homeResTR = document.querySelector(".homeResTR");
  const scrollDTTR = document.querySelector(".scrollDTTR");
  const aboutHeaderTR = document.querySelector(".aboutHeaderTR");
  const aboutH3TR = document.querySelector(".aboutH3TR");
  const aboutH3JuTR = document.querySelector(".aboutH3JuTR");
  const aboutsecpTR = document.querySelector(".aboutsecpTR");
  const aboutsecta1TR = document.querySelector(".aboutsecta1TR");
  const aboutsecta2TR = document.querySelector(".aboutsecta2TR");
  const aboutsecta3_1TR = document.querySelector(".aboutsecta3_1TR");
  const aboutsecta3_2TR = document.querySelector(".aboutsecta3_2TR");
  const aboutsecta3_3TR = document.querySelector(".aboutsecta3_3TR");
  const aboutsecta3_4TR = document.querySelector(".aboutsecta3_4TR");
  const aboutsecta4TR = document.querySelector(".aboutsecta4TR");
  const aboutsecta5TR = document.querySelector(".aboutsecta5TR");
  const aboutsecta6TR = document.querySelector(".aboutsecta6TR");
  const aboutsecta7TR = document.querySelector(".aboutsecta7TR");
  const aboutsecta8TR = document.querySelector(".aboutsecta8TR");
  const skillHeaderTR = document.querySelector(".skillHeaderTR");


  if (translateVlaue === "persian") {
    translate.classList.remove("active-TR-setting");
    translateSvg.classList.remove("active-TR-setting-svg");
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

    // --------------------------------section1-home-----------------------------------
    homeHeaderTR.textContent = dataTranslate[translateVlaue].homeHeaderTR;
    homeH3TR1.textContent = dataTranslate[translateVlaue].homeH3TR1;
    homeH3TR2.textContent = dataTranslate[translateVlaue].homeH3TR2;
    homeH3TR3.textContent = dataTranslate[translateVlaue].homeH3TR3;
    homePTR.textContent = dataTranslate[translateVlaue].homePTR;
    homeResTR.textContent = dataTranslate[translateVlaue].homeResTR;
    scrollDTTR.textContent = dataTranslate[translateVlaue].scrollDTTR;

    // --------------------------------section2-about-----------------------------------
    aboutHeaderTR.textContent = dataTranslate[translateVlaue].aboutHeaderTR;
    aboutH3TR.textContent = dataTranslate[translateVlaue].aboutH3TR;
    aboutH3JuTR.textContent = dataTranslate[translateVlaue].aboutH3JuTR;
    aboutsecpTR.textContent = dataTranslate[translateVlaue].aboutsecpTR;
    aboutsecta1TR.textContent = dataTranslate[translateVlaue].aboutsecta1TR;


    aboutsecta2TR.textContent = dataTranslate[translateVlaue].aboutsecta2TR;
    aboutsecta3_1TR.textContent = dataTranslate[translateVlaue].aboutsecta3_1TR;
    aboutsecta3_2TR.textContent = dataTranslate[translateVlaue].aboutsecta3_2TR;
    aboutsecta3_3TR.textContent = dataTranslate[translateVlaue].aboutsecta3_3TR;
    aboutsecta3_4TR.textContent = dataTranslate[translateVlaue].aboutsecta3_4TR;
    aboutsecta4TR.textContent = dataTranslate[translateVlaue].aboutsecta4TR;
    aboutsecta5TR.textContent = dataTranslate[translateVlaue].aboutsecta5TR;
    aboutsecta6TR.textContent = dataTranslate[translateVlaue].aboutsecta6TR;
    aboutsecta7TR.textContent = dataTranslate[translateVlaue].aboutsecta7TR;
    aboutsecta8TR.textContent = dataTranslate[translateVlaue].aboutsecta8TR;

    // --------------------------------section3-Skill-----------------------------------
    skillHeaderTR.textContent = dataTranslate[translateVlaue].skillHeaderTR;



    translate.setAttribute("language", "english");
  } else if (translateVlaue === "english") {
    translate.classList.add("active-TR-setting");
    translateSvg.classList.add("active-TR-setting-svg");
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

    // --------------------------------section1-home-----------------------------------
    homeHeaderTR.textContent = dataTranslate[translateVlaue].homeHeaderTR;
    homeH3TR1.textContent = dataTranslate[translateVlaue].homeH3TR1;
    homeH3TR2.textContent = dataTranslate[translateVlaue].homeH3TR2;
    homeH3TR3.textContent = dataTranslate[translateVlaue].homeH3TR3;
    homePTR.textContent = dataTranslate[translateVlaue].homePTR;
    homeResTR.textContent = dataTranslate[translateVlaue].homeResTR;
    scrollDTTR.textContent = dataTranslate[translateVlaue].scrollDTTR;

    // --------------------------------section2-about-----------------------------------
    aboutHeaderTR.textContent = dataTranslate[translateVlaue].aboutHeaderTR;
    aboutH3TR.textContent = dataTranslate[translateVlaue].aboutH3TR;
    aboutH3JuTR.textContent = dataTranslate[translateVlaue].aboutH3JuTR;
    aboutsecpTR.textContent = dataTranslate[translateVlaue].aboutsecpTR;
    aboutsecta1TR.textContent = dataTranslate[translateVlaue].aboutsecta1TR;

    aboutsecta2TR.textContent = dataTranslate[translateVlaue].aboutsecta2TR;
    aboutsecta3_1TR.textContent = dataTranslate[translateVlaue].aboutsecta3_1TR;
    aboutsecta3_2TR.textContent = dataTranslate[translateVlaue].aboutsecta3_2TR;
    aboutsecta3_3TR.textContent = dataTranslate[translateVlaue].aboutsecta3_3TR;
    aboutsecta3_4TR.textContent = dataTranslate[translateVlaue].aboutsecta3_4TR;
    aboutsecta4TR.textContent = dataTranslate[translateVlaue].aboutsecta4TR;
    aboutsecta5TR.textContent = dataTranslate[translateVlaue].aboutsecta5TR;
    aboutsecta6TR.textContent = dataTranslate[translateVlaue].aboutsecta6TR;
    aboutsecta7TR.textContent = dataTranslate[translateVlaue].aboutsecta7TR;
    aboutsecta8TR.textContent = dataTranslate[translateVlaue].aboutsecta8TR;


    // --------------------------------section3-Skill-----------------------------------
    skillHeaderTR.textContent = dataTranslate[translateVlaue].skillHeaderTR;

    translate.setAttribute("language", "persian");
  }
}
