const convertToCelsius = function(temp) {
  temp= (temp - 32) * 5/9;
  return Math.round(temp * 10)/ 10;
};
convertToCelsius(90)
const convertToFahrenheit = function(temp) {
  temp= (temp * (9 / 5) + 32);
  return Math.round(temp * 10)/ 10;
};
convertToFahrenheit(180)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
