var dataTranslate = {
    "english" : {
        "tranTR" : "Trnaslate",
        "darkTR" : "Dark mode",
        "homeTR" : "Home",
        "aboutTR" :"About",
        "skillTR" : "Skill",
        "schoolTR" : "Education",
        "projectsTR" : "Projects",
        "servicesTR" : "Services",
        "contactTR" : "Contact Us",
        "addTR" : "New",
    },
    "persian" :{
        "tranTR" : "ترجمه صفحه",
        "darkTR" : "حالت تاریک",
        "homeTR" : "خانه",
        "aboutTR" :"درباره من",
        "skillTR" : "مهارت ها",
        "schoolTR" : "تحصیلات",
        "projectsTR" : "پروژه ها",
        "servicesTR" : "خدمات",
        "contactTR" : "راه ارتباطی",
        "addTR" : "جدید",
    }
}


const translate = document.getElementById("translate");


translate.addEventListener("click", translateF);

function translateF(){
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

    if(translateVlaue==="persian"){
        translate.classList.remove("active-TR-setting");

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

        

        translate.setAttribute("language" , "english");

    }else if(translateVlaue === "english"){
        translate.classList.add("active-TR-setting");


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




        translate.setAttribute("language" , "persian");

    }
}


