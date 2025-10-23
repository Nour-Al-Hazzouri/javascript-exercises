// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. 
// The test is: a ≤ arr[i] ≤ b.
const array= [1, 5, 8, 3, 55, 9 ,10]
function filterRangeInPlace(arr, a, b) {
    let filteredArray= array.filter((num) => num >= a && num <= b);
    console.log(filteredArray)
}
filterRangeInPlace(array, 5, 10);

// My results come correct but the solution did not use filter:
/*
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
*/