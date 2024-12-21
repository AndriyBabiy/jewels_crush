import Swiper from 'swiper';
import '../node_modules/swiper/swiper-bundle.min.css';
const swiper = new Swiper('.swiper-container', {
  loop: true, // Enable looping
  slidesPerView: 1, // One slide at a time
  spaceBetween: 1, // Space between slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Allow clicking on pagination bullets
  },
});
export default swiper;
