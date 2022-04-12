import {isEscapeKey} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const templateComment = bigPicture.querySelector('.social__comment');
const loadMore = bigPicture.querySelector('.social__comments-loader');
const loadedComments = bigPicture.querySelector('.social__comment-count');
const commentsCount = bigPicture.querySelector('.comments-count');

const COMMENTS_LOAD_STEP = 5;

let pictureComments = [];
let pictureCommentsLength = 0;

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onBigPictureCancelClick = () => {
  closeBigPicture();
};

const fillComment = ({name, avatar, message}) => {
  const comment = templateComment.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragment.appendChild(fillComment(comment));
  });
  bigPicture.querySelector('.social__comments').appendChild(fragment);
};

const updateLoadedCommentsCount = (newValue) => {
  loadedComments.firstChild.textContent = [newValue, ' из '].join('');
};

const onLoadMoreClick = () => {
  let i = COMMENTS_LOAD_STEP;
  if (pictureComments.length > pictureCommentsLength) {
    if ((pictureComments.length - pictureCommentsLength) <= COMMENTS_LOAD_STEP) {
      i = pictureComments.length - pictureCommentsLength;
      loadMore.classList.add('hidden');
    }
    renderComments(pictureComments.slice(pictureCommentsLength, pictureCommentsLength + i));
    pictureCommentsLength += i;
    updateLoadedCommentsCount(pictureCommentsLength);
  }
};

const openBigPicture = ({url, description, likes, comments}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  commentsCount.textContent = comments.length;
  bigPicture.querySelector('.social__comments').innerHTML = '';
  loadMore.classList.remove('hidden');
  pictureComments = comments;
  pictureCommentsLength = 0;
  onLoadMoreClick();
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  loadMore.addEventListener('click', onLoadMoreClick);
};

function closeBigPicture () {
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  loadMore.removeEventListener('click', onLoadMoreClick);
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

export {openBigPicture, closeBigPicture};
