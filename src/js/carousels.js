import "slick-carousel";
(function ($) {
  "use strict";
  $(function () {

    $(".works__slider").slick({
      infinite: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      fade: false,
      rows: 0,
      swipeToSlide: true,
      nextArrow: `
        <button class="works__arrow" title="Показать следующий слайд">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 8H14M14 8L8 2M14 8L8 14" stroke="#F26422" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      `,
      prevArrow: `
        <button class="works__arrow works__arrow_prev" title="Показать предыдущий слайд">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 8H14M14 8L8 2M14 8L8 14" stroke="#F26422" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      `,

      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
          }
        },

      ]
    });

  });
})(jQuery);
