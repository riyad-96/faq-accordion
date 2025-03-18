const faqItems = document.querySelectorAll('.faq-items');

faqItems.forEach((faqItem) => {
  const question = faqItem.querySelector('.faq-question');
  const answer = faqItem.querySelector('.faq-answer');
  const icon = faqItem.querySelector('.hide');
  const plusIcon = icon.nextElementSibling;

  question.addEventListener('click', () => {

    // if(answer.style.maxHeight) {
    //   answer.style.maxHeight = null;
    // }
    // else{
    //   answer.style.maxHeight = answer.scrollHeight + 'px';
    // }

    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';

    // if(icon.classList.contains('hide')){
    //   icon.classList.remove('hide')
    //   plusIcon.classList.add('hide')
    // }
    // else{
    //   icon.classList.add('hide')
    //   plusIcon.classList.remove('hide')
    // }

    icon.classList.toggle('hide')
    plusIcon.classList.toggle('hide')
    
  });

});
