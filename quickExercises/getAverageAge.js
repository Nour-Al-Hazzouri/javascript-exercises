// Write the function getAverageAge(users) 
// that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

// Went with OG syntax for this functionality
function getAverageAge(arr) {
    let averageAge= 0;
    const arrLength= arr.length
    for (let i= 0; i< arrLength; i++) {
        averageAge += arr[i].age;
    }
    return averageAge / arrLength;
};
console.log(getAverageAge(arr));
