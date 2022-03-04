/* возвращает любое целое число в интервале
 источник:
 https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
const getRandomInt = function(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

getRandomInt(0, 5);

const isStringMaxLength = function(text, maxLength) {
  return text.length <= maxLength;
};

isStringMaxLength('ab', 2);

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

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

// источник: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
const getRandomArrayElements = (elements) => {
  const shuffled = elements.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, getRandomInt(1, elements.length - 1));
};

const comments = Array.from({length: COMMENTS_LENGTH}, (value, item) => {
  const id = item + 1;
  const randomAvator = getRandomInt(1, 6);
  return {
    id, // равнозначно id: id
    avatar: ['img/avatar-', randomAvator, '.svg'].join(''),
    message: getRandomArrayElement(USER_COMMENTS),
    name: getRandomArrayElement(USER_NAMES)
  };
});

const data = Array.from({length: DATA_LENGTH}, (value, item) => {
  const id = item + 1;
  const likes = getRandomInt(15, 200);
  return {
    id,
    url: ['photos/{{', id, '}}.jpg'].join(''),
    description: getRandomArrayElement(COMMENT_DESC),
    likes, // равнозначно likes: likes
    comments: getRandomArrayElements(comments),
  };
});

console.log(data);
