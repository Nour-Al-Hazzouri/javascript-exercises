// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. 
// The test is: a ≤ arr[i] ≤ b.
const array= [1, 5, 8, 3, 55, 9 ,10]
function filterRangeInPlace(arr, a, b) {
    let filteredArray= array.filter((num) => num >= a && num <= b);
    console.log(filteredArray)
}
filterRangeInPlace(array, 5, 10);