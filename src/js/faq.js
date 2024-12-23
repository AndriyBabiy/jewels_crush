const refs = {
  faqButton: document.getElementsByClassName('faq-collapse'),
};

for (let i = 0; i < refs.faqButton.length; i++) {
  refs.faqButton[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const faqItem = this.closest('.faq-elem');
    faqItem.classList.toggle('active-faq');
  });
}
