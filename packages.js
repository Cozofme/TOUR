// Array of image sources and their alt texts
const images = [
  { src: 'leh.jpeg', alt: 'Leh Landscape' },
  { src: 'ladhak.jpeg', alt: 'Ladhak Scenery' },
  { src: 'kerla.jpeg', alt: 'Kerala Backwaters' },
  { src: 'assam.jpeg', alt: 'Assam Temple' }
];

let currentIndex = 0;
let slideInterval;

// Get references to DOM elements
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots-container');

// Function to initialize the slider
function initSlider() {
  images.forEach((image, index) => {
    // Create and append images
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    slider.appendChild(img);

    // Create and append dots
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  updateSliderWidth();
  showImage(currentIndex);
  startSlider();
}

// Function to update the slider width dynamically based on container
function updateSliderWidth() {
  const sliderContainer = document.querySelector('.slider-container');
  const sliderWidth = sliderContainer.clientWidth;
  slider.style.width = `${images.length * sliderWidth}px`;

  // Ensure each image takes the full slider container width
  const imgElements = slider.querySelectorAll('img');
  imgElements.forEach(img => {
    img.style.width = `${sliderWidth}px`;
  });
}

// Function to update the image position and active dot
function showImage(index) {
  const sliderContainer = document.querySelector('.slider-container');
  const sliderWidth = sliderContainer.clientWidth;
  slider.style.transform = `translateX(${-index * sliderWidth}px)`;

  // Update active dot
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Function to go to a specific slide when a dot is clicked
function goToSlide(index) {
  currentIndex = index;
  showImage(currentIndex);
  resetInterval();
}

// Function to automatically change slides
function startSlider() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
  }, 3000); // 3 seconds interval
}

// Function to reset interval when a manual change is made
function resetInterval() {
  clearInterval(slideInterval);
  startSlider();
}

// Adjust the slider width dynamically if the window is resized
window.addEventListener('resize', () => {
  updateSliderWidth();
  showImage(currentIndex); // Adjust the position after resizing
});

// Initialize slider on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initSlider);