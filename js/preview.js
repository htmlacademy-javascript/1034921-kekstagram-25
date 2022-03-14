import {generateData} from './data';

const pictures = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('.picture');
const fragment = document.createDocumentFragment();
const elements = generateData();

elements.forEach(({url, likes, comments}) => {
  const element = template.cloneNode(true);
  const pictureImg = element.querySelector('.picture__img');
  const pictureLikes = element.querySelector('.picture__likes');
  const pictureComments = element.querySelector('.picture__comments');
  pictureImg.src = url;
  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;
  fragment.appendChild(element);
});

pictures.appendChild(fragment);
