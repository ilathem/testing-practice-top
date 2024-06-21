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

module.exports = { capitalize, reverseString };