const factorial = function (nb) {
  if (nb < 0 || !Number.isInteger(nb)) return undefined;
  if (nb === 1) return nb;
  else if (nb === 0) return 1;
  else return (nb *= factorial(nb - 1));
};
// Do not edit below this line
module.exports = factorial;
