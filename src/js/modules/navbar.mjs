window.onscroll = function() {myFunction()};
let imgLogo=document.querySelector("#logo");
let navbar = document.getElementById("navbar");
let select=document.querySelector("#menufdp");
let nouveauLogo=document.createElement("img");
nouveauLogo.setAttribute("src","./public/img/logo.png");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    imgLogo.style.display="none";
    navbar.style.backgroundColor="white";
    navbar.style.zIndex="100";
    navbar.classList.add("sticky");
    select.insertBefore(nouveauLogo,select.firstChild);

  } else {
    navbar.classList.remove("sticky");
    nouveauLogo.remove();
    imgLogo.style.display="initial";
    imgLogo.style.marginLeft="40%";
  }
}