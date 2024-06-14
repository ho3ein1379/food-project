"use strict";
const cateBtn = document.querySelector('.categories-btn');
const cateArrow = document.querySelector('.arrow-icon');
const categories = document.querySelector('.categories');
const company = document.querySelector('.company-footer');
const companyDe = document.querySelector('.company-details');
const companyArrow = document.querySelector('.company-arrow');
const information = document.querySelector('.Information-footer');
const informationDe = document.querySelector('.Information-details');
const informationArrow = document.querySelector('.Information-arrow');
cateBtn.onclick = function () {
    cateShow();
    arrowRotate();
};
function cateShow() {
    if (categories.style.display == "flex") {
        categories.classList.remove('show-categories');
    }
    categories.classList.toggle('show-categories');
    categories.style.transition = "0.3s ease-in";
}
function arrowRotate() {
    if (cateArrow.classList.toggle('rotate')) {
        cateArrow.classList.add('rotate');
    }
    else
        cateArrow.classList.remove('rotate');
    cateArrow.style.transition = "0.3s ease-in";
}
const menuIcon = document.querySelector('.menu-icon');
const menuDetails = document.querySelector('.menu-details');
const htmlElement = document.querySelector("html");
const shadowBox = document.querySelector('.shadow-bx');
menuIcon.onclick = function (e) {
    e.stopPropagation();
    showMen();
};
htmlElement.onclick = function () {
    hideMen();
};
menuDetails.onclick = function (e) {
    e.stopPropagation();
};
window.onresize = function () {
    if (window.innerWidth > 500) {
        hideMen(false);
    }
};
function showMen() {
    menuDetails.classList.add("show-menu");
    shadowBox.classList.add("shadow");
}
function hideMen(animation = true) {
    if (animation) {
        menuDetails.style.transition = "transform 0.8s ease-in-out";
        setTimeout(function () {
            menuDetails.style.removeProperty("transition");
        }, 500);
    }
    menuDetails.classList.remove("show-menu");
    shadowBox.classList.remove("shadow");
}
company.onclick = function () {
    showCo();
    comArrowRotate();
};
information.onclick = function () {
    showIn();
    infArrowRotate();
};
function showCo() {
    if (companyDe.style.display == "none") {
        companyDe.classList.remove("hidden");
    }
    companyDe.classList.toggle("hidden");
}
function showIn() {
    if (informationDe.style.display == "none") {
        informationDe.classList.remove("hidden");
    }
    informationDe.classList.toggle("hidden");
}
function comArrowRotate() {
    if (companyArrow.classList.toggle('rotate')) {
        companyArrow.classList.add('rotate');
    }
    else
        companyArrow.classList.remove('rotate');
    companyArrow.style.transition = "0.3s ease-in";
}
function infArrowRotate() {
    if (informationArrow.classList.toggle('rotate')) {
        informationArrow.classList.add('rotate');
    }
    else
        informationArrow.classList.remove('rotate');
    informationArrow.style.transition = "0.3s ease-in";
}
const moveTop = document.querySelector('.move-btn');
moveTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const textsProduct = document.getElementsByClassName('popular-text');
const textsOffers = document.getElementsByClassName('text-offers');
const textsSell = document.getElementsByClassName('sell-text');
// console.log(textsProduct)
let text;
window.onresize = function () {
    if (window.innerWidth < 900) {
        proText();
        offText();
        sellText();
    }
};
function proText() {
    for (let textsPro of textsProduct) {
        // console.log(texts.childNodes)
        text = textsPro.innerHTML;
        // console.log(text)
        textsPro.innerHTML = text.length > 27 ? text.slice(0, 27) + "..." : text;
    }
}
function offText() {
    for (let textsOff of textsOffers) {
        text = textsOff.innerHTML;
        textsOff.innerHTML = text.length > 18 ? text.slice(0, 18) + "..." : text;
    }
}
function sellText() {
    for (let textSell of textsSell) {
        text = textSell.innerHTML;
        textSell.innerHTML = text.length > 12 ? text.slice(0, 12) + "..." : text;
    }
}
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
        },
    },
});
const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5.43,
        },
    },
});
const swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    },
});
const swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    },
});
