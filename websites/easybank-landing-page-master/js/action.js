
let span =  document.querySelectorAll(".hamburger-menu span");
let nav = document.querySelector("#nav-bar .nav-itoms-mob"); 
let width = window.innerWidth;
let mode = "off";
function myFunction(){
    if(mode == "off"){ 
        nav.style.opacity ="1";
        nav.style.top = "75px";
        span[0].style.transform = "rotate(-45deg)"; 
        span[1].style.opacity = "0";
        span[2].style.transform = "rotate(45deg)";
        mode = "on";
    }else if(mode == "on"){
        nav.style.opacity ="0";
        nav.style.top = "150px";
        span[0].style.transform = "rotate(0)";
        span[1].style.opacity = "1";
        span[2].style.transform = "rotate(0)";
        mode = "off";
    }
}
 