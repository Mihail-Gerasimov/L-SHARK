'use struct';

const kl = new Swiper('.services-container', {

  navigation: {
    nextEl: '.cases-next',
    prevEl: '.cases-prev',
  },
  // centeredSlides:true,

  // slidesPerView: 4.3,
  // spaceBetween: 0,
  // simulateTouch:false,
  // autoplay: {
  //     delay: 1000,
  //   },
  //  slidesPerGroup:1
});

const swiper = new Swiper('.swiper-container', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView:1.2
        },
        476: {
            slidesPerView:1,
            centeredSlides:false
        }
      },
   
  });