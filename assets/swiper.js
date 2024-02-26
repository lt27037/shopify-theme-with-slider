let checkSwiperLoadedInterval = setInterval(function() {
  if (typeof Swiper !== 'undefined' && document.querySelector('.Slider')) {
    new Swiper('.Slider', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 24,
      activeIndex: 1,
      navigation: {
        nextEl: '.Slider__buttonNext',
        prevEl: '.Slider__buttonPrev',
      }
    });
    clearInterval(checkSwiperLoadedInterval);
  }
}, 50);
