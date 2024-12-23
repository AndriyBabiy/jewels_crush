import * as header from './js/header.js';
import * as faq from './js/faq.js';
import { initializeSlickSlider } from './js/swiper.js';
initializeSlickSlider('.gallery-container');

import AOS from 'aos';
import 'aos/dist/aos.css';

//AOS
AOS.init({
  offset: 100, // Offset (in pixels) from the original trigger point
  delay: 150, // Delay (in milliseconds) before the animation starts
  duration: 1000, // Duration (in milliseconds) of the animation
  // easing: 'ease', // Easing function for the animation
  once: false, // Whether animation should happen only once - while scrolling down
  // mirror: false, // Whether elements should animate out while scrolling past them
  // anchorPlacement: 'top-bottom', // Defines which position of the element triggers the animation
});

// document.addEventListener('click', e => {
//   console.log(e.target);
// });
