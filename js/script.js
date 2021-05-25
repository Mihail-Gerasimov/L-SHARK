'use struct';
const swiper = new Swiper('.swiper-container', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     // delay: 1500,
    //   },
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