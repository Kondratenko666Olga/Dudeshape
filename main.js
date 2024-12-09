const images = [
  'head.jpg',
  'productRight.jpg',
  'productLeft.jpg',
  'Rectangle 8.jpg',
];
let counter = 0;
const slide = document.getElementById('slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
const updateSlide = () => {
  slide.classList.add('fadeOut');
  slide.classList.remove('fadeIn');

  setTimeout(() => {
    slide.classList.remove('fadeOut');
    slide.classList.add('fadeIn');
    slide.src = `./images/${images[counter]}`;
  }, 500); // same duration as css transition
};

nextButton.addEventListener('click', () => {
  counter = (counter + 1) % images.length;
  updateSlide();
});

prevButton.addEventListener('click', () => {
  counter = (counter - 1 + images.length) % images.length;
  updateSlide();
});
