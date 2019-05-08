(function () {

  'use strict';

  const mySwiper2 = new Swiper2('.swiper2-container', {

    loop: true,

    slidesPerView: 'auto',
    centeredSlides: true,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    // pagination
    pagination: '.swiper2-pagination',
    paginationClickable: true,

    // navigation arrows
    nextButton: '.swiper2-button-next',
    prevButton: '.swiper2-button-prev' });





})(); /* IIFE end */