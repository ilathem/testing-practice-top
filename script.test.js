const { capitalize, reverseString } = require('./script');

test('Capitalize', () => {
  expect(capitalize('hello world')).toMatch(/Hello world/);
});

test('Reverse String', () => {
  expect(reverseString('abcd')).toMatch(/dcba/);
  expect(reverseString('cat')).toMatch(/tac/);
});

test('Calculator', () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.subtract(5, 2)).toEqual(3);
  expect(calculator.multiply(6, 8)).toEqual(48);
  expect(calculator.divide(121, 11)).toEqual(1/*  */1);
})
