// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
const array= [5, 9, 2, 6, 0, 4];
function shuffle(arr) {
    const arraySize= arr.length;
    const randomNumber= Math.floor(Math.random() * arraySize);
    const shuffledArray= arr.sort((a) => a - randomNumber);
    console.log(shuffledArray);
};
shuffle(array);

// As it seems, this is the 'simple' solution but the unreliable one. This solution shows bios due to the black box of sort method.
// The better solution is the Fisher-Yates shuffle solution, presented in this code:
/*
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}
*/