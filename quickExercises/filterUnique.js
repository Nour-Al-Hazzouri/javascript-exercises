// Create a function unique(arr) that should return an array with unique items of arr.

/*
Pseudocode:
GUI? No
Logic:
Array with duplicated values
unique function, accepts array.
    Loop through each item of the array
    compare each item to the rest of the items
    if match:
        include first time, don't include next times
    else:
        add to the filtered array anyway
    console.log result

*/
const array= ["Hello", "Hi", "Hey", "Hello", "Bonjour"];
function unique(arr) {
    const uniqueArray= arr => arr.filter((item, index) => arr.indexOf(item) === index)
    console.log(uniqueArray(arr))
};
unique(array);

// My solution did not work, and found an answer from StackOverflow.
// The solution provided:
/*
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/
// Note that there might be a performance issue in this code and can be clarified later.