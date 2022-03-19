const bigPicture = document.querySelector('.big-picture');
const templateFragment = document.querySelector('#comment').content;
const template = templateFragment.querySelector('.social__comment');
const body = document.querySelector('body');

function fillComments({name, avatar, message}) {
  const comment = template.cloneNode(true);
  const socialName = comment.querySelector('.social__picture');
  const socialPicture = comment.querySelector('.social__picture');
  const socialText = comment.querySelector('.social__text');
  socialName.alt = name;
  socialPicture.src = avatar;
  socialText.textContent = message;
  return comment;
}

function renderComments(comments) {
  const fragment = document.createDocumentFragment();
  const socialComments = bigPicture.querySelector('.social__comments');
  comments.forEach((comment) => {
    fragment.appendChild(fillComments(comment));
  });
  socialComments.innerHTML = '';
  socialComments.appendChild(fragment);
}

function openBigPicture(url, description, likes, comments) {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img');
  const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
  const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
  bigPictureImg.src = url;
  bigPictureLikesCount.textContent = likes;
  bigPictureCommentsCount.classList.add('hidden');
  renderComments(comments);
  bigPicture.classList.remove('.hidden');
  body.classList.add('modal-open');
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}

export {openBigPicture, closeBigPicture};
