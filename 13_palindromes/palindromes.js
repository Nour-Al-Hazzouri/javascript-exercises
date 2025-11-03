const palindromes = function (line) {
    const transformed= line.split(/[ ,.!?]+/).join("").toLowerCase();
    const reversed= transformed.split("").reverse().join("").toLowerCase();
    if (transformed === reversed) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;