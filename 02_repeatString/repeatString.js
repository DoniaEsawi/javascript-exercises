const repeatString = function (stringToBeRepeated, numRepeats) {
  if (!(typeof numRepeats === "number") || numRepeats < 0) {
    return "ERROR";
  } else if (numRepeats === 0) {
    return "";
  }
  let singleString = stringToBeRepeated;
  for (let i = 0; i < numRepeats - 1; i++) {
    stringToBeRepeated += singleString;
  }
  return stringToBeRepeated;
};

// Do not edit below this line
module.exports = repeatString;
