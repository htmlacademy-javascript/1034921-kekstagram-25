import {isEscapeKey} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const onElementEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onBigPictureCancel = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onElementEscKeydown);
};

function openBigPicture(element, description) {
  const {url, likes, comments} = description;
  element.classList.remove('hidden');
  element.querySelector('.big-picture__img').src = url;
  element.querySelector('.likes-count').textContent = likes;
  element.querySelector('.comments-count').textContent = comments;
  bigPictureCancel.addEventListener('click', onBigPictureCancel);
  document.addEventListener('keydown', onElementEscKeydown);
  body.classList.add('modal-open');
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  bigPictureCancel.removeEventListener('click', onBigPictureCancel);
  document.removeEventListener('keydown', onElementEscKeydown);
};

export {openBigPicture, closeBigPicture};
