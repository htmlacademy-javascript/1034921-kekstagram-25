const bigPicture = document.querySelector('.big-picture');
const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');

function fillComment({name, avatar, message}) {
  const newComment = templateComment.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
}

function renderComments(comments) {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragment.appendChild(fillComment(comment));
  });
  bigPicture.querySelector('.social__comments').innerHTML = '';
  bigPicture.querySelector('.social__comments').appendChild(fragment);
}

function openBigPicture({url, description, likes, comments}) {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  renderComments(comments);
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

export {openBigPicture, closeBigPicture};
