const convertToCelsius = function(degree) {
  const fahrenheit = (degree - 32) * 5 / 9;
  var rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(degree) {
  const celcius = (degree * 9 / 5 + 32);
  var rounded = Math.round(celcius * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
