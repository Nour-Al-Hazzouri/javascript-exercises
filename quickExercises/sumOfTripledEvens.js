const array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum= 0
// map method
const sumOfTripledEvens1= array.map(triple => {
    if (triple % 2 == 0) return sum += triple * 3;
});
console.log("Sum by map method: " + sum);

// filter method
const sumOfTripledEvens2= array.filter(triple => {
    if (triple % 2 == 0) return sum += triple * 3;
});
console.log("Sum by filter method: " + sum)

// reduce method
const sumOfTripledEvens3= array.reduce((accumulator, currentValue) => {
    if (currentValue % 2 == 0) return sum += currentValue * 3;
});
console.log("Sum by reduce method: " + sum);