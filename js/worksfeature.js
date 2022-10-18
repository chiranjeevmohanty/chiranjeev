let categories = document.querySelectorAll(".filtter a");
let anim = document.querySelector(".animation");
let uiWorks = document.querySelector("#ui-works");
let illustrationWorks = document.querySelector("#illustration-works");
let logoDesign = document.querySelector("#logo-design");
let banner = document.querySelector("#banner");
let printMedia = document.querySelector("#print-media");
let development = document.querySelector("#development");
console.log(categories);
categories[0].addEventListener("click", (e) => {
    uiWorks.style.display = "grid";
    illustrationWorks.style.display = "none";
    logoDesign.style.display = "none";
    banner.style.display = "none";
    printMedia.style.display = "none";
    development.style.display = "none";
});
categories[1].addEventListener("click", (e) => {
    uiWorks.style.display = "none";
    illustrationWorks.style.display = "none";
    logoDesign.style.display = "grid";
    banner.style.display = "none";
    printMedia.style.display = "none";
    development.style.display = "none";
});
categories[2].addEventListener("click", (e) => {
    illustrationWorks.style.display = "grid";
    uiWorks.style.display = "none";
    logoDesign.style.display = "none";
    banner.style.display = "none";
    printMedia.style.display = "none";
    development.style.display = "none";
});
categories[3].addEventListener("click", (e) => {
    illustrationWorks.style.display = "none";
    uiWorks.style.display = "none";
    logoDesign.style.display = "none";
    banner.style.display = "grid";
    printMedia.style.display = "none";
    development.style.display = "none";
});
categories[4].addEventListener("click", (e) => {
    illustrationWorks.style.display = "none";
    uiWorks.style.display = "none";
    logoDesign.style.display = "none";
    banner.style.display = "none";
    printMedia.style.display = "grid";
    development.style.display = "none";
});
categories[5].addEventListener("click", (e) => {
    illustrationWorks.style.display = "none";
    uiWorks.style.display = "none";
    logoDesign.style.display = "none";
    banner.style.display = "none";
    printMedia.style.display = "none";
    development.style.display = "grid";
});

$(document).ready(function () {
    $('#ui-works').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    })
    $('#illustration-works').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    })
    $('#logo-design').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    })
    $('#banner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    })
    $('#print-media').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    })
});

let filterBtn = document.querySelector('#filtter-btn');
let openIcon = document.querySelector('#filtter-btn i');
let menu = document.querySelector(".filtter");
let mode = "off";
filterBtn.addEventListener("click", (e) => { 
    if (mode == "off") {
        menu.style.display = "flex";
        mode = "on";
        openIcon.style.color = "#755cde";
    } else { 
        openIcon.style.color = "#000";
        mode = "off";
        menu.style.display = "none";
    }
})

 
    width = window.innerWidth;
    window.addEventListener("click", (e) => {
        if (width < 576) {
            if (e.target != document.querySelector("#filtter-btn")) {
                menu.style.display = "none";
                openIcon.style.color = "black"; 
                mode = "off";
            }
        } else {
            menu.style.display = "flex";
            mode = "on";
        }
    })
