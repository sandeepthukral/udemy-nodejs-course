const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(3,7);
  const expected = 10;
  if (res !== expected) {
    throw new Error(`Expected ${expected} but got ${res}`);
  }
});

it('should square a number', () => {
  var res = utils.square(7);
  const expected = 49;
  if (res !== expected) {
    throw new Error(`Expected ${expected} but got ${res}`);
  }
});