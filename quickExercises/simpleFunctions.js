// Write a function called add7 that takes one number and returns that number + 7.
let add7 = (n) => n + 7;
console.log(add7(7));

// Write a function called multiply that takes 2 numbers and returns their product.
let multiply = (n, y) => n * y;
console.log(multiply(5, 5));

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized.
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

let capitalize = (s) => {
  let len = s.length;
  let result = "";
  for (let i = 0; i < len; i++) {
    if (i == 0) {
        result += s[0].toUpperCase();
      } else {
        result += s[i].toLowerCase();
    }
  }
  return result
};

console.log(capitalize("rATATATTATA"))

// Write a function called lastLetter that takes a string and returns the very last letter of that string
let lastLetter= s => {
    let len= s.length -1
    console.log(s[len])
}
lastLetter("HEHE BOY")

