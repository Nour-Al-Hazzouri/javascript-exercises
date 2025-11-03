const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
	return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  }
  let totalFactorial= number;
	for (let i= number - 1; i > 0; i--) {
    totalFactorial *= i;
  }
  return totalFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
