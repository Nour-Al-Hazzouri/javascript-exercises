const permutations = function (array, currentIndex = 0, results = []) {
  const isArray = Array.isArray(array);
  const arrayLength = array.length;
  if (isArray && arrayLength === 0) return [[]];
  else if (isArray && arrayLength === 1) return [[array[0]]];
  else {
    if (currentIndex === arrayLength) {
      results.push([...array]);
      return;
    }
    for (let i = currentIndex; i < arrayLength; i++) {
      [array[currentIndex], array[i]] = [array[i], array[currentIndex]];
      permutations(array, currentIndex + 1, results);
      [array[currentIndex], array[i]] = [array[i], array[currentIndex]];
    }
    return results;
  }
};

// Do not edit below this line
module.exports = permutations;
