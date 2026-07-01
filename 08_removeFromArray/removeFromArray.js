// Implement a function that takes an array and some other arguments then removes the other arguments from that array
/*
Pseudocode:
GUI? No
Logic:
removeFromArray receives provided arguments
removeFromArray reads the array elements, and the value to be removed, by the last item in restItems
value is removed through an array method
array is printed (console.log)
*/

const removeFromArray = function(array, ...restItems) {
    const removedValues= array.filter((num) => !restItems.includes(num))
    return removedValues;
};
removeFromArray([1, 2, 3, 4], 3, 2)
// Do not edit below this line
module.exports = removeFromArray;
