const contains = function (object, value) {
  if (object === value || Number.isNaN(value)) return true;
  if (Array.isArray(object)) return object.includes(value);
  if (typeof object === "object" && object !== null)
    for (let subObject of Object.values(object))
      if (contains(subObject, value)) return true;
  return false;
};

// Do not edit below this line
module.exports = contains;
