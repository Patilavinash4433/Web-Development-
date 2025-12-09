// script.js

const scrollBtn = document.getElementById('scroll-btn');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById('gallery').offsetTop,
        behavior: 'smooth'
    });
});