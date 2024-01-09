const sumAll = function (start, end) {
  if (
    !(typeof start === "number" && typeof end === "number") ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  let sum = start;
  while (start < end) {
    start++;
    sum += start;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
