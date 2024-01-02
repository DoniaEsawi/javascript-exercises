const reverseString = function (stringToReverese) {
  if (!(typeof stringToReverese === "string")) {
    return "ERROR";
  }
  let reversedString = "";
  for (let i = stringToReverese.length - 1; i >= 0; i--) {
    reversedString += stringToReverese[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
