const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 6000); // Cambia automáticamente de imagen cada 3 segundos

showSlide(currentIndex);

carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

carouselContainer.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 6000);
});

let autoSlide = setInterval(nextSlide, 6000);