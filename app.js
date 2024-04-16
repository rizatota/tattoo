const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const numVisibleItems = 5;

nextBtn.addEventListener('click', () => {
  const totalItems = slider.children.length;
  if (currentIndex < totalItems - numVisibleItems) {
    currentIndex++;
    slideSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slideSlider();
  }
});

function slideSlider() {
  const translatePercentage = -currentIndex * (100 / numVisibleItems);
  slider.style.transform = `translateX(${translatePercentage}%)`;
}