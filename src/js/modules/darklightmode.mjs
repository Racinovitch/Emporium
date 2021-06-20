let btnLight=document.querySelector("#lightmode");
let btnDark=document.querySelector("#darkmode");
let resteBlanc=document.querySelector("#resteBlanc");
let imageEmp=Array.from(document.querySelectorAll(".colorMode"));
let imageShirt=Array.from(document.querySelectorAll(".colorMode1"));
let sect=Array.from(document.querySelectorAll(".flou"));
let hormis=document.querySelector(".hormis");

btnDark.addEventListener("click",()=>{
    sect.forEach(element=>{
        element.style.backgroundColor="black";
        element.style.color="white";
    })
    imageEmp.forEach(element=>{
        element.setAttribute("src","./public/img/logoBlanc.jpg");
    })
    imageShirt.forEach(element=>{
        element.setAttribute("src","./public/img/slider-1Blanc.jpg");
    })
    hormis.style.backgroundColor="black";
});

btnLight.addEventListener("click",()=>{
    sect.forEach(element=>{
        element.style.backgroundColor="white";
        element.style.color="black";
        resteBlanc.style.color="white";
    })
    imageEmp.forEach(element=>{
        element.setAttribute("src","./public/img/logo.png");
    })
    imageShirt.forEach(element=>{
        element.setAttribute("src","./public/img/slider-1.jpg");
    })
    hormis.style.backgroundColor="rgb(243,243,243)";
});
