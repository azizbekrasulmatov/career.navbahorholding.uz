const burger = document.querySelector('.burger')
const list = document.querySelector('.nav__list')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    list.classList.toggle('active');
});

document.querySelectorAll('.nav__list-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

function closeMenu() {
    list.classList.remove('active');
    setTimeout(() => {
        burger.classList.remove('active');
    }, 350);
}
