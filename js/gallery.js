import {openBigPicture, closeBigPicture} from './bigPicture.js';
import {isEscapeKey} from './utils.js';

const addHandlerToPicture = (picture, data) => {
  const pictureImg = picture.querySelector('.picture__img');
  const bigPictureCancel = document.querySelector('.big-picture__cancel');
  pictureImg.addEventListener('click', () => openBigPicture(data));
  bigPictureCancel.addEventListener('click', () => closeBigPicture());
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      closeBigPicture();
    }
  });
};

const makeGalleryInteractive = (pictures) => {
  const gallery = document.querySelectorAll('.picture');
  gallery.forEach((picture, i) => addHandlerToPicture(picture, pictures[i]));
};

export {makeGalleryInteractive};
