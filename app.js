const imgGallery = document.querySelector('.img-gallery');
const imageWrapper = document.querySelector('.imageWrapper');
const fullImg = document.querySelector('#fullImg');
const closeBtn = document.querySelector('.imageWrapper span');

// Add click event listener to all the images in the gallery
imgGallery.addEventListener('click', e => {
  // Check if the clicked element is an image
  if (e.target.tagName === 'IMG') {
    // Display the larger version of the clicked image
    fullImg.src = e.target.src;
    imageWrapper.style.display = 'flex';
  }
});

// Add click event listener to the close button
closeBtn.addEventListener('click', () => {
  // Hide the larger version of the image
  imageWrapper.style.display = 'none';
});