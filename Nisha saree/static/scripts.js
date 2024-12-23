// Slider functionality for the hero section
document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
        });
        // Show the current slide
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop to the first slide after the last one
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last slide if at the beginning
        showSlide(currentSlide);
    }

    // Set event listeners for the buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-play the slider (optional)
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Show the first slide on page load
    showSlide(currentSlide);
});
