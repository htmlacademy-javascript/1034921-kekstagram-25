/* объявление функции getRandomInt(a, b)
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
