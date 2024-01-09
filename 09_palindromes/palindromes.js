const palindromes = function (str) {
  // remove any spaces, remove any punctuations, converst to lower case
  const arrStr = str
    .split("")
    .filter((char) => char.match(/[a-z0-9]/i))
    .map((char) => char.toLowerCase());
  const reversedArr = arrStr.slice(0).reverse();
  return arrStr.every((value, index) => value === reversedArr[index]);
};

// Do not edit below this line
module.exports = palindromes;
