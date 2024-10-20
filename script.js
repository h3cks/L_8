// Отримуємо елементи з DOM
const openBtn = document.getElementById('open-lightbox-btn');
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-lightbox-btn');

// Відкриття lightbox
openBtn.addEventListener('click', () => {
    lightbox.style.display = 'flex'; // Відображаємо lightbox
});

// Закриття lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Приховуємо lightbox
});

// Закриття lightbox при кліку поза формою
window.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none'; // Закриваємо lightbox при кліку на overlay
    }
});

