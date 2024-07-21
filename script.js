document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.technology-box');
    
    // Clone the first few slides for infinite looping
    for (let i = 0; i < slides.length; i++) {
        let cloneSlide = slides[i].cloneNode(true);
        slider.appendChild(cloneSlide);
    }
    
    let slideIndex = 0;
    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const totalWidth = slideCount * slideWidth;
    const slideSpeed = 2; // Adjust the speed here (higher value = faster)
    
    // Function to move the slider continuously
    function moveSlider() {
        slideIndex += slideSpeed;
        if (slideIndex >= totalWidth) {
            slideIndex = 0;
        }
        slider.style.transform = `translateX(-${slideIndex}px)`;
        requestAnimationFrame(moveSlider);
    }
    
    // Start the slider motion
    moveSlider();
});
