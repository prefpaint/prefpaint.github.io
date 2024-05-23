let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentIndex = index;
}

function currentSlide(index) {
  showSlide(index - 1);
}