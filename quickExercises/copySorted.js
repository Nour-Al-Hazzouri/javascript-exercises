// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
const array= ["Hello", "Abracadaniel", "TumtumtumZahur", "Whatever"];
function copySorted(arr) {
    let copiedArray= arr.sort();
    console.log(copiedArray)
}
copySorted(array);

// Their solution:
/*
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );
*/