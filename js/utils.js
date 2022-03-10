/* возвращает любое целое число в интервале
 источник:
 https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
const getRandomInt = function(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isStringMaxLength = function(text, maxLength) {
  return text.length <= maxLength;
};

isStringMaxLength('text', 5);

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

// источник: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
const getRandomArrayElements = (elements) => {
  const shuffled = elements.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, getRandomInt(1, elements.length - 1));
};

export {
  getRandomInt,
  getRandomArrayElement,
  getRandomArrayElements
};
