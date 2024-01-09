const fibonacci = (num) =>
  num == 0
    ? 0
    : num == 1 || num == 2
    ? 1
    : num > 2
    ? fibonacci(num - 2) + fibonacci(num - 1)
    : "OOPS";

// Do not edit below this line
module.exports = fibonacci;
