/* объявление функции getRandomInt(min, max)
 если аргумент min менее 0, то выводится сообщение об ошибке
 источник:
 https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
const getRandomInt = function(min, max) {
  const err = 'Начальное значение должно быть более 0';
  return min > 0 ? Math.floor(Math.random() * (max - min)) + min : err;
};

getRandomInt(0, 5);
