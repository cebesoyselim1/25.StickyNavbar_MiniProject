const navbar = document.querySelector(".navbar");
const sectionbg = document.querySelector("#section-bg");
const sectiona = document.querySelector("#section-a");
const sectionb = document.querySelector("#section-b");
const sectionc = document.querySelector("#section-c");
const sectiond = document.querySelector("#section-d");

window.addEventListener("scroll", (e) => {
    //console.log(window.scrollY);
    if(window.scrollY < 100){
        navbar.classList.remove("active");
    }else if(window.scrollY > 100 && window.scrollY < sectionbg. offsetHeight){
        navbar.classList.add("active");
    }else if(window.scrollY > sectionbg.offsetHeight && window.scrollY < sectiona.offsetHeight + sectionbg.offsetHeight){
        navbar.classList.remove("active");
    }else if(window.scrollY > sectiona.offsetHeight + sectionbg.offsetHeight && window.scrollY < sectiona.offsetHeight + sectionb.offsetHeight + sectionbg.offsetHeight){
        navbar.classList.add("active");
    }else{
        navbar.classList.remove("active");
    }
    console.log(sectionbg.offsetY)
    console.log(sectiona.offsetTop);
})