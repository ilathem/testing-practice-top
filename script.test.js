const { capitalize, reverseString } = require('./script');

test('Capitalize', () => {
  expect(capitalize('hello world')).toMatch(/Hello world/);
});

test('Reverse String', () => {
  expect(reverseString('abcd')).toMatch(/dcba/);
  expect(reverseString('cat')).toMatch(/tac/);
});
