const faqItems = document.querySelectorAll('.faq-items');

faqItems.forEach((faqItem) => {
  const question = faqItem.querySelector('.faq-question');
  const answer = faqItem.querySelector('.faq-answer');
  const icon = faqItem.querySelector('.hide');
  const plusIcon = icon.nextElementSibling;

  question.addEventListener('click', () => {

    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';

    icon.classList.toggle('hide')
    plusIcon.classList.toggle('hide')
    
  });

});
