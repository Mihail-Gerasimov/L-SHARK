"use strict";

const swiper = new Swiper('.image-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1.2
        },
        476: {
            slidesPerView: 1,
            centeredSlides: false
        }
    },

});


const swiperR = new Swiper('.services-container', {

    navigation: {
        nextEl: '.services-next',
        prevEl: '.services-prev',
    },

    breakpoints: {
        1400: {
            slidesPerView: 4.3,
        },
        1220: {
            slidesPerView: 3.8,
        },
        1020: {
            slidesPerView: 3.1,
        },
        860: {
            slidesPerView: 3.1,
        },
        700: {
            slidesPerView: 2.5,
        },
        576: {
            slidesPerView: 2,
        },
        475: {
            slidesPerView: 1.6,
        },
        426: {
            slidesPerView: 1.4,
        }
    },

});

const swiperL = new Swiper('.rev-container', {

    navigation: {
        nextEl: '.rev-next',
        prevEl: '.rev-prev',
    },

    breakpoints: {
        1020: {
            slidesPerView: 3,
            centeredSlides: 0,
            loop: false,
            inicialSlide: 0,
            spaceBetween: 0,
        },
        860: {
            slidesPerView: 2.5,
        },
        600: {
            slidesPerView: 2.2,
        },
        475: {
            slidesPerView: 1.7,
            centeredSlides: 0,
            loop: false,
            inicialSlide: 0,
            spaceBetween: 0,
        },
        320: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            inicialSlide: 2,
            spaceBetween: 15,
        }
    },

});

let radius = 275;
let autoRotate = true;
let rotateSpeed = -100;
let imgWidth = 140;
let imgHeight = 205;
setTimeout(init, 300);
let odrag = document.getElementById("drag-container");
let ospin = document.getElementById("spin-container");
let carousel = document.getElementById("carousel");
let aImg = ospin.getElementsByTagName("a");
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";
let ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
    for (let i = 0; i < aImg.length; i++) {
        aImg[i].style.transform =
            "rotateY(" +
            i * (360 / aImg.length) +
            "deg) translateZ(" +
            radius +
            "px)";
    }
}

function applyTranform(obj) {
    if (tY > 0) tY = 0;
    if (tY < 0) tY = 0;
    obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}
let sX,
    sY,
    nX,
    nY,
    desX = 0,
    desY = 0,
    tX = 0,
    tY = 0;
if (autoRotate) {
    let animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
    ospin.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
    )}s infinite linear`;
}
carousel.onpointerdown = function(e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    let sX = e.clientX,
        sY = e.clientY;
    this.onpointermove = function(e) {
        e = e || window.event;
        let nX = e.clientX,
            nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
    };
    this.onpointerup = function(e) {
        odrag.timer = setInterval(function() {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTranform(odrag);
        }, 17);
        this.onpointermove = this.onpointerup = null;
    };
    return false;
};