let hamburger = document.querySelector(".hamburger");
let navlinks = document.querySelector(".navlinks ul");

hamburger.addEventListener("click",function(){
    navlinks.classList.toggle("active");
    hamburger.classList.toggle("active");
})