import Swiper from 'swiper/bundle'; 

'use strict'

new Swiper('.swiper-container', {
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

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }

});