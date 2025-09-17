const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a, b) {
  let arr = Array.from(a, b);;
  return arr.reduce((acc, curr) => acc + curr, 0)
};

const multiply = function (a, b) {
  let arr = Array.from(a, b);;
  return arr.reduce((acc, curr) => acc * curr)
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (x) {
  if (x === 0) {
    return x = 1;
  } else {
    for (let i = (x - 1); i >= 1; i--) {
      x *= i;
    }
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
