const { capitalize } = require('./script');

test('Capitalize', () => {
  expect(capitalize('hello world')).toMatch(/Hello world/)
})