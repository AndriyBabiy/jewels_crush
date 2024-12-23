// slickSlider.js
import 'slick-carousel/slick/slick.css'; // Import Slick's CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick's theme CSS
import 'slick-carousel'; // Import Slick's JavaScript
import $ from 'jquery';

// Function to initialize Slick
export function initializeSlickSlider(selector) {
  $(selector).slick({
    infinite: true,
    initialSlide: 0,
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
}
