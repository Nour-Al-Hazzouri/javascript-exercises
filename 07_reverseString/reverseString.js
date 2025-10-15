const reverseString = function(string) {
    let len= string.length - 1
    let reverse= '';
    for (let i= len; i >= 0; i--) {
        reverse += string[i]
    }
    return reverse

};

// Do not edit below this line
module.exports = reverseString;
