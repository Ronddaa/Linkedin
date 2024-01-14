import Swiper from 'swiper/bundle'; 

'use strict'

const swiperAuction = new Swiper('.swiper-margin', {
  // Optional parameters
  direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
   slidesPerGroup: 2,

  grabCursor: true,

  mousewheel: {
    sensitivity: 1,
    eventTarget: '.swiper-slider'
  },

  autoHeight: true,

  spaceBetween: 20,

});