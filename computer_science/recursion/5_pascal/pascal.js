const pascal = function (int) {
  if (Number.isFinite(int)) {
    if (int === 1) return [1];
    const currentRow = pascal(int - 1);
    const tempRow = [];
    for (let i = 0; i < int; i++) {
      if (i === 0) tempRow.push(currentRow[i]);
      else if (i === int - 1) tempRow.push(1);
      else if (i < int - 1) tempRow.push(currentRow[i - 1] + currentRow[i]);
    }
    return tempRow;
  }
};

// Do not edit below this line
module.exports = pascal;
