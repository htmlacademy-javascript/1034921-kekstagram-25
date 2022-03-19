import {openBigPicture, closeBigPicture} from './bigPicture.js';

function addHandlerToPicture(picture, data) {
  const pictureImg = picture.querySelector('.picture__img');
  const bigPictureCancel = picture.querySelector('.big-picture__cancel');
  pictureImg.addEventListener('click', () => openBigPicture(data));
  document.addEventListener('click', () => closeBigPicture());
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeBigPicture();
    }
  });
}

function makeGalleryInteractive(photosData) {
  const gallery = document.querySelectorAll('.picture');
  for (let i = 0; i < gallery.length; i++) {
    addHandlerToPicture(gallery[i], photosData[i]);
  }
}

export {makeGalleryInteractive};
