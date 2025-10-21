// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// Pseudocode:
/*
GUI? No.
Logic:
User inputs the desired sentence (must have dashes)
1. Program takes the sentence and splits it based on the dashes (split method)
2. Program takes each part of the sentence in a loop or array method (map or for)
    1. Check IF this is the first word
        1. Yes? Pass
        2. No? Turn the first character into uppercase using index (char number 0)
    2. Finished? Join all array elements into 1 sentence (join method)
    3. Print it (console.log)
*/
const testSentence= "camel-case-sentence-addition-sentence";
const camelize= (str) => {
    let splittedSentence= str.split("-")
    let capitalLetter;
    let camelizedSentence= splittedSentence.map((currentItem) => {
        if (currentItem !== (splittedSentence[0])) {
            capitalLetter= currentItem[0].toUpperCase();
            return currentItem.slice(0, 0) + currentItem.charAt(0).toUpperCase() + currentItem.slice(0 + 1);
        } else {
            return currentItem;
        }
    });
    return camelizedSentence.join("");

};
console.log(camelize(testSentence));

// javascript.info solution:
// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }