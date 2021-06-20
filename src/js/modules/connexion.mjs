let connexion=document.querySelector("#btnConnexion");
console.log(connexion);
let connexionDiv=document.querySelector("#connexion");
console.log(connexionDiv);
let closeDiv=document.querySelector("#xClose");
console.log(closeDiv);
let flou=Array.from(document.querySelectorAll(".flou"));
console.log(flou);
connexion.addEventListener("click",()=>{
    connexionDiv.style.display="block";
    flou.forEach(element=>{
        element.style.filter="blur(6px)";
    })
})

connexionDiv.addEventListener("focusout",()=>{
    connexionDiv.style.display="none";
    flou.forEach(element=>{
        element.style.filter="none";
    })
})

closeDiv.addEventListener("click",()=>{
    connexionDiv.style.display="none";
    flou.forEach(element=>{
        element.style.filter="none";
    })
})