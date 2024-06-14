
const cateBtn: HTMLButtonElement = document.querySelector('.categories-btn')!;
const cateArrow: HTMLImageElement  = document.querySelector('.arrow-icon')!;
const categories: HTMLDivElement = document.querySelector('.categories')!;
const company : HTMLHeadingElement = document.querySelector('.company-footer')!;
const companyDe : HTMLDivElement = document.querySelector('.company-details')!;
const companyArrow : HTMLImageElement = document.querySelector('.company-arrow')!;
const information : HTMLHeadingElement = document.querySelector('.Information-footer')!;
const informationDe : HTMLDivElement = document.querySelector('.Information-details')!;
const informationArrow : HTMLImageElement = document.querySelector('.Information-arrow')!;

cateBtn.onclick = function (): void {
    cateShow();
    arrowRotate();
}

function cateShow(): void {
    if (categories.style.display == "flex") {
        categories.classList.remove('show-categories');
    }
    categories.classList.toggle('show-categories');
    categories.style.transition = "0.3s ease-in";
}

function arrowRotate(): void {
    if (cateArrow.classList.toggle('rotate')) {
        cateArrow.classList.add('rotate');
    }else
        cateArrow.classList.remove('rotate');
        cateArrow.style.transition = "0.3s ease-in";
}

const menuIcon: HTMLButtonElement = document.querySelector('.menu-icon')!;
const menuDetails: HTMLDivElement = document.querySelector('.menu-details')!;
const htmlElement: HTMLHtmlElement = document.querySelector("html")!;
const shadowBox: HTMLDivElement = document.querySelector('.shadow-bx')!;


menuIcon.onclick = function (e: MouseEvent): void {
    e.stopPropagation();
    showMen();
}

htmlElement.onclick = function (): void {
    hideMen();
}

menuDetails.onclick = function (e: MouseEvent): void {
    e.stopPropagation();
}

window.onresize = function (): void{
    if (window.innerWidth > 500) {
        hideMen(false);
    }
}

function showMen(): void {
    menuDetails.classList.add("show-menu");
    shadowBox.classList.add("shadow");
}

function hideMen(animation: boolean = true): void {
    if (animation) {
        menuDetails.style.transition = "transform 0.8s ease-in-out";
        setTimeout(function (): void {
            menuDetails.style.removeProperty("transition");
        },  500);
    }
    menuDetails.classList.remove("show-menu");
    shadowBox.classList.remove("shadow");
}

company.onclick = function (): void {
    showCo();
    comArrowRotate();
}

information.onclick = function (): void {
    showIn();
    infArrowRotate();
}

function showCo(): void {
    if (companyDe.style.display == "none") {
        companyDe.classList.remove("hidden");
    }
    companyDe.classList.toggle("hidden");
}

function showIn(): void {
    if (informationDe.style.display == "none") {
        informationDe.classList.remove("hidden");
    }
    informationDe.classList.toggle("hidden");
}

function comArrowRotate(): void {
    if (companyArrow.classList.toggle('rotate')) {
        companyArrow.classList.add('rotate');
    }else
        companyArrow.classList.remove('rotate');
        companyArrow.style.transition = "0.3s ease-in";
}

function infArrowRotate(): void {
    if (informationArrow.classList.toggle('rotate')) {
        informationArrow.classList.add('rotate');
    }else
        informationArrow.classList.remove('rotate');
    informationArrow.style.transition = "0.3s ease-in";
}

const moveTop: HTMLButtonElement = document.querySelector('.move-btn')!;

moveTop.addEventListener('click', function(): void {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const textsProduct: HTMLCollectionOf<Element> = document.getElementsByClassName('popular-text');
const textsOffers: HTMLCollectionOf<Element> = document.getElementsByClassName('text-offers');
const textsSell: HTMLCollectionOf<Element> = document.getElementsByClassName('sell-text');
// console.log(textsProduct)
let text : string;

window.onresize = function (): void{
    if (window.innerWidth < 900) {
        proText();
        offText();
        sellText();
    }
}

function proText(): void {
    for (let textsPro of textsProduct) {
        // console.log(texts.childNodes)
        text = textsPro.innerHTML
        // console.log(text)
        textsPro.innerHTML = text.length > 27 ? text.slice(0 , 27)+ "..." : text;
    }
}

function offText(): void {
    for (let textsOff of textsOffers) {
        text = textsOff.innerHTML
        textsOff.innerHTML = text.length > 18 ? text.slice(0 , 18)+ "..." : text;
    }
}

function sellText(): void {
    for (let textSell of textsSell) {
        text = textSell.innerHTML
        textSell.innerHTML = text.length > 12 ? text.slice(0 , 12)+ "..." : text;
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