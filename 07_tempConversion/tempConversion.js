//x °F ≘ (x − 32) × 5/9°C
const convertToCelsius = function (temp) {
  if (!(typeof temp === "number")) {
    return "ERROR";
  }
  return parseFloat((((temp - 32) * 5) / 9).toFixed(1));
};

// x °C ≘ (x × 9/5 + 32) °F
const convertToFahrenheit = function (temp) {
  if (!(typeof temp === "number")) {
    return "ERROR";
  }
  return parseFloat(((temp * 9) / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
