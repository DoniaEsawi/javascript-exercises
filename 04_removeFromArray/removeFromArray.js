const removeFromArray = function (array, ...elementsToRemove) {
  if (!Array.isArray(array)) {
    return "ERROR";
  }
  let i = 0;
  let found = false;
  while (i < array.length) {
    found = false;
    for (let j = 0; j < elementsToRemove.length; j++) {
      if (array[i] === elementsToRemove[j]) {
        array.splice(i, 1);
        found = true;
      }
    }
    if (!found) {
      i++;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
