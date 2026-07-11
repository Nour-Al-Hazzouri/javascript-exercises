const totalIntegers = function (object, isRoot = true) {
  let intCount = 0;
  if (!Array.isArray(object) && typeof object !== "object" && isRoot === true)
    return undefined;
  if (Number.isInteger(object)) intCount += 1;
  if (Array.isArray(object) || typeof object === "object") {
    if (Array.isArray(object)) {
      object
        .filter((item) => Number.isInteger(item))
        .forEach((item) => (intCount += 1));
      object
        .filter((item) => Array.isArray(item) || typeof item === "object")
        .forEach((item) => (intCount += totalIntegers(item, (isRoot = false))));
    } else if (typeof object === "object" && object !== null) {
      for (let subObject of Object.values(object)) {
        intCount += totalIntegers(subObject, (isRoot = false));
      }
    }
  }
  return intCount;
};

// Do not edit below this line
module.exports = totalIntegers;
