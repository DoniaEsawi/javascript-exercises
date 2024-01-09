const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = (arr) => arr.reduce((total, element) => total + element, 0);
const multiply = (arr) => arr.reduce((total, element) => total * element, 1);
const power = function (a, b) {
  return a ** b;
};

const factorial = (num) =>
  num === 0 || num === 1 ? 1 : num * factorial(num - 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
