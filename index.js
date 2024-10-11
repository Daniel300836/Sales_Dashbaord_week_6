/* let wrap = document.querySelector(".mini-wrap")
console.log(wrap); */

let btn = document.querySelector("button")
console.log(btn);

btn.addEventListener("click", function (){
    console.log("I am Here")
    let mini_wrap = document.querySelector(".mini-wrap").classList
    let content = document.querySelector('.content').classList;
    
    mini_wrap.toggle("mini-wrap-closed")
    content.toggle("content-closed")
})