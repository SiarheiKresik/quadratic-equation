module.exports = function solveEquation(equation) {
  var a, b, c; // coefficients
  [a, b, c] = parseEquation(equation);
  var d = b * b - 4 * a * c; // discriminant
  var x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  var x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  return [x1, x2].sort((x, y) => x - y);
}

function parseEquation(equation) {
  // Returns an array of coefficients.
  return equation.replace(/\s+/g, '')
    .split(/\*x(?:\^2)?/)
    .map(Number);
}