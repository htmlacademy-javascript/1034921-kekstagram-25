import {isEscapeKey} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const onElementEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const onBigPictureCancel = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onElementEscKeydown);
};

function openUserModal() {
  bigPicture.classList.remove('hidden');
  bigPictureCancel.addEventListener('click', onBigPictureCancel);
  document.addEventListener('keydown', onElementEscKeydown);
}

function closeUserModal () {
  bigPicture.classList.add('hidden');
  bigPictureCancel.removeEventListener('click', onBigPictureCancel);
  document.removeEventListener('keydown', onElementEscKeydown);
};

const clickElement = (element) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    openUserModal();
  });
};

export {clickElement};
