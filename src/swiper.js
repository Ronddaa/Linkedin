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

function addSwiperClasses() {
      const screenWidth = window.innerWidth;
      const swiperContainer = document.getElementById('addSwiperContainer');
      const swiperWrapper = document.getElementById('addSwiperWrapper');
      const swiperSlide = document.getElementById('addSwiperSlide');

      if (screenWidth >= 768 && screenWidth <= 1158) {
        addClass(swiperContainer, 'swiper-container');
        addClass(swiperWrapper, 'swiper-wrapper');
        addClass(swiperSlide, 'swiper-slide');
      } else {
        removeClass(swiperContainer, 'swiper-container');
        removeClass(swiperWrapper, 'swiper-wrapper');
        removeClass(swiperSlide, 'swiper-slide');
      }
    }

    function addClass(element, className) {
      if (element && !element.classList.contains(className)) {
        element.classList.add(className);
      }
    }

    function removeClass(element, className) {
      if (element && element.classList.contains(className)) {
        element.classList.remove(className);
      }
    }

    // Вызываем функцию при загрузке страницы и при изменении размеров окна
    window.addEventListener('load', addSwiperClasses);
    window.addEventListener('resize', addSwiperClasses);