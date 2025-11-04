// Fibonacci works through this formula: Fn= Fn-1 + Fn-2
// This means each number is the result of adding the previous 2 numbers
// Translated into code:
/*
We need 2 initial numbers: F0= 1, F0= 1
F0 + F1= F2= 2
Next number is the addition of the latest 2 numbers: F1 + F2= 1 + 2= 3, and so on...
What does this mean:
We need 2 initial numbers, sum them, get the result, update the last variable, and add it with the previous variable
How to do this? some sort of loop. with n as the limiter
*/
const fibonacci = function (n) {
  let F0 = 0;
  let F1 = 1;
  let fibonacciSequence = 0;
  if (n < 0) {
    return "OOPS";
  } else if (n == 0) {
    return 0;
  } else if (typeof n == 'string') {
    parseInt(n);
    if (n == 1) 
    {
        return 1;
    }
  }
  for (let i = 1; i < n; i++) {
    fibonacciSequence = F0 + F1;
    F0 = F1;
    F1 = fibonacciSequence;
  }
  return fibonacciSequence;
};
console.log(fibonacci("1"));
// Do not edit below this line
module.exports = fibonacci;
