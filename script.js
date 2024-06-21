function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let newStr = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += (string.charAt(i));
  }
  return newStr;
}

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
}

module.exports = { capitalize, reverseString, calculator };