function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string.charAt(i);
  }
  return newStr;
}

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
};

function caesarCipher(string, shift) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (code > 64 && code < 91) {
      let newCode = code + shift;
      if (newCode > 90) newCode = newCode - 90 + 64;
      newStr += String.fromCharCode(newCode);
    } else if (code > 96 && code < 123) {
      let newCode = code + shift;
      if (newCode > 122) newCode = newCode - 122 + 96;
      newStr += String.fromCharCode(newCode);
    } else {
      newStr += string.charAt(i);
    }
  }
  return newStr;
}

function analyzeArray(array) {
  let sum = 0;
  let min = array[0];
  let max = array[0];
  array.forEach((elem) => {
    sum += elem;
    if (elem < min) min = elem;
    if (elem > max) max = elem;
  });
  return {
    average: sum / array.length,
    min,
    max,
    length: array.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
