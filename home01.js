const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log('ok')
});
