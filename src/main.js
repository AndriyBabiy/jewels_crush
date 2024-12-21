import * as header from './js/header.js';
import * as faq from './js/faq.js';

$('.gallery-container').slick({
  infinite: true,
  initialSlide: 0,
  // autoplay: false,
  // autoplaySpeed: 1000,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '20px', // Reduce padding to avoid jumping
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '20px', // Reduce padding on smaller screens
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        centerPadding: '20px', // Reduce padding on larger screens
      },
    },
  ],
  prevArrow: '<button class="slick-prev"></button>',
  nextArrow: '<button class="slick-next"></button>',
});
// On before slide change
// $('.gallery-container').on(
//   'beforeChange',
//   function (event, slick, currentSlide, nextSlide) {
//     console.log(slick);
//   }
// );
