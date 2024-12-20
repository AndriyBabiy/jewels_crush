const refs = {
  navBurgerMenu: document.querySelector('.js-burgerMenu-container'),
  navList: document.querySelector('.js-navList'),
  navItemMenu: document.querySelector('.js-nav-item'),
};

function createModal() {
  const modal = document.createElement('div');
  modal.classList.add('headerModal', 'modal-navList');
  modal.innerHTML = `
      <ul class='header-modal-list'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
  `;
  return modal;
}

function updateBurgerIcon(isOpen) {
  const svgElement = refs.navBurgerMenu.querySelector('use');
  if (isOpen) {
    svgElement.setAttribute(
      'xlink:href',
      '../img/svg/sprite.svg#icon-close-cross'
    );
  } else {
    svgElement.setAttribute(
      'xlink:href',
      '../img/svg/sprite.svg#icon-burger-menu'
    );
  }
}
function modalToggle() {
  let modal = document.querySelector('.headerModal');
  const isDesktop = window.innerWidth >= 1200;

  // Create modal if it doesn't exist
  if (!modal) {
    modal = createModal();
    refs.navList.insertAdjacentElement('afterend', modal);
  }

  const isOpen = modal.classList.contains('show');

  if (isDesktop) {
    if (isOpen) {
      modal.classList.remove('show');
      updateBurgerIcon(false);
    }
  } else {
    // If on mobile, toggle the modal visibility
    modal.classList.toggle('show');
    updateBurgerIcon(!isOpen);
  }
}

function closeModalIfDesktop() {
  console.log('first');
  const modal = document.querySelector('.headerModal');
  const isDesktop = window.innerWidth >= 1200;

  if (isDesktop && modal && modal.classList.contains('show')) {
    modal.classList.remove('show');
    updateBurgerIcon(false);
  }
}

refs.navBurgerMenu.addEventListener('click', modalToggle);
window.addEventListener('resize', closeModalIfDesktop);
