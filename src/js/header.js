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
        <li class='js-anchor'><a href="#home">Home</a></li>
        <li class='js-anchor'><a href="#about-us">About Us</a></li>
        <li class='js-anchor'><a href="#benefits">Benefits</a></li>
        <li class='js-anchor'><a href="#gallery">Gallery</a></li>
        <li class='js-anchor'><a href="#faq">FAQ</a></li>
      </ul>
  `;
  modal.querySelector('.header-modal-list').addEventListener('click', event => {
    const clickedElement = event.target;
    console.log('clickedElement', clickedElement);

    if (clickedElement.tagName === 'LI') {
      const anchor = clickedElement.querySelector('a');
      console.log('anchor', anchor);
      if (anchor) {
        modalToggle();

        setTimeout(() => {
          // Now navigate to the section
          window.location.hash = anchor.getAttribute('href'); //navigation
        }, 100);
      }
    } else if (clickedElement.tagName === 'A') {
      modalToggle(); // Close the modal when A is clicked
    }
  });

  return modal;
}

function updateBurgerIcon(isOpen) {
  const svgElement = refs.navBurgerMenu.querySelector('use');
  if (isOpen) {
    svgElement.setAttribute(
      'xlink:href',
      './img/svg/sprite.svg#icon-close-cross'
    );
  } else {
    svgElement.setAttribute(
      'xlink:href',
      './img/svg/sprite.svg#icon-burger-menu'
    );
  }
}
function modalToggle() {
  let modal = document.querySelector('.headerModal');
  const isDesktop = window.innerWidth >= 1200;

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
    modal.classList.toggle('show');
    updateBurgerIcon(!isOpen);
  }
}

function closeModalIfDesktop() {
  const modal = document.querySelector('.headerModal');
  const isDesktop = window.innerWidth >= 1200;

  if (isDesktop && modal && modal.classList.contains('show')) {
    modal.classList.remove('show');
    updateBurgerIcon(false);
  }
}

refs.navBurgerMenu.addEventListener('click', modalToggle);
window.addEventListener('resize', closeModalIfDesktop);
