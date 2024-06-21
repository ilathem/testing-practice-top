const capitalize = require('./capitalize');

test('Capitalize', () => {
  expect(capitalize('hello world')).toMatch(/Hello world/)
})