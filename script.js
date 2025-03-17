const questions = document.querySelectorAll('.faq-question')

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('open')

    const plusIcon = question.querySelector('img + img')
    const minusIcon = question.querySelector('img')
    console.log(plusIcon, minusIcon)

    plusIcon.classList.toggle('hide')
    minusIcon.classList.toggle('show')
  })
})