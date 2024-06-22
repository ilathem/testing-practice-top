const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} = require("./script");

test("Capitalize", () => {
  expect(capitalize("hello world")).toMatch(/Hello world/);
});

test("Reverse String", () => {
  expect(reverseString("abcd")).toMatch(/dcba/);
  expect(reverseString("cat")).toMatch(/tac/);
});

test("Calculator", () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.subtract(5, 2)).toEqual(3);
  expect(calculator.multiply(6, 8)).toEqual(48);
  expect(calculator.divide(121, 11)).toEqual(11);
});

test("Caesar Cipher", () => {
  expect(caesarCipher("xyz", 3)).toMatch(/abc/);
  expect(caesarCipher("HeLLo", 3)).toMatch(/KhOOr/);
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

