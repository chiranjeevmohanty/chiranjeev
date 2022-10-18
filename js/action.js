/* accessing menu button */
const menubut = document.querySelector("#burger-menu");
const menubar = document.querySelector(".nav-itoms-desktop");
const span = document.querySelectorAll("#burger-menu span");
const anchortags = document.querySelectorAll(".nav-itoms-desktop a");
const menubarmob = document.querySelector(".nav-itoms-mob");


let width = window.innerWidth;
if (width >= 576) {
    let mode = "close";
    menubut.addEventListener("click", (e) => {
        if (mode == "close") {
            menubar.style.top = "0px";
            span[0].style.transform = "rotate(-45deg)";
            span[0].style.width = "35px";
            span[1].style.width = "0px";
            span[2].style.transform = "rotate(45deg)";
            span[2].style.width = "35px";
            mode = "open";
        } else {
            menubar.style.top = "-100px";
            span[0].style.transform = "rotate(0deg)";
            span[0].style.width = "40px";
            span[1].style.width = "35px";
            span[2].style.transform = "rotate(0deg)";
            span[2].style.width = "30px";
            mode = "close";
        }
    })

} else if (width < 576) {
    mode = "close";
    menubut.addEventListener("click", (e) => {
        if (mode == "close") {
            menubarmob.style.left = "50%";
            span[0].style.transform = "rotate(-45deg)";
            span[0].style.width = "35px";
            span[1].style.width = "0px";
            span[2].style.transform = "rotate(45deg)";
            span[2].style.width = "35px";
            mode = "open";
        } else if (mode == "open") {
            menubarmob.style.left = "-90vw";
            span[0].style.transform = "rotate(0deg)";
            span[0].style.width = "40px";
            span[1].style.width = "35px";
            span[2].style.transform = "rotate(0deg)";
            span[2].style.width = "30px";
            mode = "close";
        }
    })
}


$('#my-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="bi bi-arrow-left-circle-fill"></i>', '<i class="bi bi-arrow-right-circle-fill"></i>'],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
})


/* function getWidthTwo() {
    width = window.innerWidth;
 
}
window.onload(getWidthTwo());
window.onresize(getWidthTwo()); */

