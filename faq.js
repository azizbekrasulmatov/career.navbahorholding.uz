const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    question.addEventListener('click', () => {
    // Закрыть все открытые
    faqItems.forEach(otherItem => {
      const otherAnswer = otherItem.querySelector('.faq__answer');
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherAnswer.style.height = '0';
      }
    });

    // Переключить текущий
    const isOpen = item.classList.contains('active');
    if (isOpen) {
        item.classList.remove('active');
        answer.style.height = '0';
    } else {
        item.classList.add('active');
        answer.style.height = answer.scrollHeight + 'px';
    }
});
});

// Чтобы при ресайзе не ломалась высота
window.addEventListener('resize', () => {
    document.querySelectorAll('.faq__item.active .faq__answer').forEach(answer => {
    answer.style.height = answer.scrollHeight + 'px';
});
});