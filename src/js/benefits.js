import AOS from 'aos';
import 'aos/dist/aos.css';
import benefitsData from './benefits-data.json'; // Import JSON file

AOS.init({
  offset: 100,
  delay: 350,
  duration: 1000,
  once: false,
  mirror: true,
});

// Store the original HTML content (for desktop)
const originalContent = document.getElementById('benefits').innerHTML;

// Function to generate HTML content from JSON data
function generateBenefitsHTML(benefits) {
  return `
    <section class="benefits" id="benefits">
      <h2 class="section-title">Benefits</h2>
      <ul class="benefits-list">
        ${benefits
          .map(
            benefit => `
          <li class="benefits-item">
            <div class="div-changer" data-aos="fade-up">
              <div class="benefits-image ${benefit.imageClass}"></div>
              <div class="benefits-textbox">
                <h3 class="benefits-subtitle">${benefit.title}:</h3>
                <p class="benefits-text">${benefit.description}</p>
              </div>
            </div>
          </li>
        `
          )
          .join('')}
      </ul>
    </section>
  `;
}

// Function to update content based on screen size
function updateBenefitsContent() {
  const benefitsSection = document.getElementById('benefits');
  const isMobile = window.innerWidth <= 1199; // Adjust this value based on your breakpoint for mobile

  const content = isMobile
    ? generateBenefitsHTML(benefitsData)
    : originalContent;
  benefitsSection.innerHTML = content;
  AOS.refresh();
}

// Initial content update
updateBenefitsContent();

// Update content on window resize
window.addEventListener('resize', updateBenefitsContent);
