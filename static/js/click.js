document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    function currentSlide(n, carouselIndex) {
      const carousel = carousels[carouselIndex];
      const images = carousel.querySelectorAll('img');
      const dots = carousel.querySelectorAll('.dots span');
  
      images.forEach((img, index) => {
        img.classList.remove('active');
        dots[index].classList.remove('active');
      });
  
      images[n - 1].classList.add('active');
      dots[n - 1].classList.add('active');
    }
  
    // Initialize the first slide as active
    carousels.forEach((carousel, index) => {
      currentSlide(1, index);
    });
  });