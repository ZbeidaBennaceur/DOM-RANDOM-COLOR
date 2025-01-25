
document.addEventListener("DOMContentLoaded",function() {
const square = document.querySelector("#color-box");
const button= document.querySelector("#change-color-btn");
const titre=document.querySelector(".titre");


button.addEventListener("click",function getRandomColor (){
    let R=Math.floor(Math.random()*255);
    let V=Math.floor(Math.random()*255);
    let B=Math.floor(Math.random()*255);

    square.style.backgroundColor=`rgb(${R},${V},${B})`;
    button.style.backgroundColor=`rgb(${R},${V},${B})`;
    titre.style.color=`rgb(${R},${V},${B})`;
});
})