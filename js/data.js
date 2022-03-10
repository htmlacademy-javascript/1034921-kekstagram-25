import {
  getRandomInt,
  getRandomArrayElement,
  getRandomArrayElements
} from './utils.js';

const DATA_LENGTH = 25;
const COMMENTS_LENGTH = 2;

const USER_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const USER_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENT_DESC = [
  'Это круто!',
  'Я ржал',
  'Было такое',
  'Где это?',
  'Но это не точно!'
];

const generateComments = Array.from({length: COMMENTS_LENGTH}, (value, item) => {
  const id = item + 1;
  const randomAvator = getRandomInt(1, 6);
  return {
    id, // равнозначно id: id
    avatar: ['img/avatar-', randomAvator, '.svg'].join(''),
    message: getRandomArrayElement(USER_COMMENTS),
    name: getRandomArrayElement(USER_NAMES)
  };
});

const generateData = () => Array.from({length: DATA_LENGTH}, (value, item) => {
  const id = item + 1;
  const likes = getRandomInt(15, 200);
  return {
    id,
    url: ['photos/{{', id, '}}.jpg'].join(''),
    description: getRandomArrayElement(COMMENT_DESC),
    likes, // равнозначно likes: likes
    comments: getRandomArrayElements(generateComments),
  };
});

export {generateData};
