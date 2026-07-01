// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them
/* Pseudocode:
GUI? No.
Logic:
sumAll receives 2 arguments
arguments aren't necessarily sorted, this must be considered in range calculation
in a loop:
    add first number;
    increment the number by 1 then add it to the previous number
    keep going until the range is reached
*/
const sumAll = function(num1, num2) {
    if (
        num1 < 0 || num2 < 0 ||
        typeof num1=== 'string' || typeof num2=== 'string' ||
        typeof num1 !== 'number' || typeof num2 !== 'number' ||
        num1 % 1 !== 0 || num2 % 1 !== 0
    ) {
        return "ERROR";
    }
    let larger= 0; 
    larger= num1 > num2 ? larger= num1 : larger= num2;
    let smaller= 0 
    smaller= num1 < num2 ? smaller= num1 : smaller = num2;
    let increment= smaller;
    for (let i= smaller; i < larger; i++) {
        increment += (i + 1);
    }
    return increment;
};
console.log(sumAll(123, 0));
// Do not edit below this line
module.exports = sumAll;
