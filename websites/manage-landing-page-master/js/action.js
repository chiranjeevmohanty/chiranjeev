let buttons = document.querySelectorAll(".navigation button");
const mediaQuerry = window.matchMedia('(min-width: 576px)');
const menubut = document.querySelector(".menu-but");

function myFunction() {
    width = window.innerWidth;
    document.querySelector(".sec-holder").style.transform = "translateX(0px)"
    buttons[0].style.backgroundColor = "hsl(12, 88%, 59%)";
    buttons[1].style.backgroundColor = "transparent";
    buttons[2].style.backgroundColor = "transparent";
    if (width >= 576) {
        width = 540;
        buttons[0].style.backgroundColor = "hsl(12, 88%, 59%)";
        buttons[0].addEventListener("click", (e) => {
            document.querySelector(".sec-holder").style.transform = "translateX(" + 0 + "px)";
            buttons[0].style.backgroundColor = "hsl(12, 88%, 59%)";
            buttons[1].style.backgroundColor = "transparent";
            buttons[2].style.backgroundColor = "transparent";
        })
        buttons[1].addEventListener("click", (e) => {
            document.querySelector(".sec-holder").style.transform = "translateX(-" + width + "px)";
            buttons[0].style.backgroundColor = "transparent";
            buttons[1].style.backgroundColor = "hsl(12, 88%, 59%)";
            buttons[2].style.backgroundColor = "transparent";
        })
        buttons[2].addEventListener("click", (e) => {
            document.querySelector(".sec-holder").style.transform = "translateX(-" + width * 2 + "px)";
            buttons[0].style.backgroundColor = "transparent";
            buttons[1].style.backgroundColor = "transparent";
            buttons[2].style.backgroundColor = "hsl(12, 88%, 59%)";
        })
    } else if (width < 576) {
        width = 94.5;
        buttons[0].style.backgroundColor = "hsl(12, 88%, 59%)";
        buttons[0].addEventListener("click", (e) => {
            document.querySelector(".sec-holder").style.transform = "translateX(" + 0 + "vw)";
            buttons[0].style.backgroundColor = "hsl(12, 88%, 59%)";
            buttons[1].style.backgroundColor = "transparent";
            buttons[2].style.backgroundColor = "transparent";
        })
        buttons[1].addEventListener("click", (e) => {
            document.querySelector(".sec-holder").style.transform = "translateX(-" + width + "vw)";
            buttons[0].style.backgroundColor = "transparent";
            buttons[1].style.backgroundColor = "hsl(12, 88%, 59%)";
            buttons[2].style.backgroundColor = "transparent";
        })
        buttons[2].addEventListener("click", (e) => {
            document.querySelector(".sec-holder").style.transform = "translateX(-" + width * 2 + "vw)";
            buttons[0].style.backgroundColor = "transparent";
            buttons[1].style.backgroundColor = "transparent";
            buttons[2].style.backgroundColor = "hsl(12, 88%, 59%)";
        })
    } 
}
let mode = "off";
menubut.addEventListener("click", () => {
    if (mode == "off") {
        document.querySelector(".nav-itoms-mob").style.opacity = "1";
        document.querySelector(".nav-itoms-mob").style.top = "100px";
        mode = "on";
    } else if(mode == "on") {
        document.querySelector(".nav-itoms-mob").style.opacity = "0";
        document.querySelector(".nav-itoms-mob").style.top = "150px";
        mode = "off";
    }
})


