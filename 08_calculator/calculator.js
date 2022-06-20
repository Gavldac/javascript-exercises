const add = function (num1 = 0, num2 = 0) {
  return num1 + num2;
};

const subtract = function (num1 = 0, num2 = 0) {
  return num1 - num2;
};

const sum = function (nums) {
  let sumOf = 0;
  for (let num of nums) {
    sumOf += num;
  }
  return sumOf;
};

const multiply = function (nums) {
  let answer = 1;
  nums.forEach(element => {
    answer *= element;
  });
  return answer;
};

const power = function (num, expo) {
  let answer = 1;
  for (let i = 0; i < expo; i++) {
    answer *= num;
  }
  return answer;
};

const factorial = function (num) {
  let answer = 1;
  for (let i = 0; i < num; ){
    answer *= ++i;
  }
  return answer;
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
