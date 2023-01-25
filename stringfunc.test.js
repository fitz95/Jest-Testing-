const stringLength = require('./stringfunc');

test('calculates string length and returns string length which aare between 0 -11', () => {
  expect(stringLength('bobo')).toBe(4);
});