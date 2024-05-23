function currentSlide(sliderIndex, slideIndex) {
    const slider = document.getElementById(`sliderlong${sliderIndex}`);
    const slides = slider.getElementsByClassName('slidelong');
    const dots = slider.getElementsByClassName('dotlong');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}