const refs = {
  faqButton: document.getElementsByClassName('faq-collapse'),
  faqText: document.getElementsByClassName('faq-text'),
};

console.log(refs.faqButton);

for (let i = 0; i < refs.faqButton.length; i++) {
  refs.faqButton[i].addEventListener('click', function () {
    this.classList.toggle('active');

    const content = this.nextElementSibling;
    if (!this.classList.contains('active')) {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}
