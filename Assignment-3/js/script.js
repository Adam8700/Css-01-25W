document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.slideshow .next');
    const prevBtn = document.querySelector('.slideshow .prev');
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prevBtn.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    // Initialize first slide
    showSlide(current);
});
