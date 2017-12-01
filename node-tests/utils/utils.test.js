const expect = require("expect");
const utils = require("./utils");

it('should add two numbers', () => {
  var res = utils.add(3,7);
  const expected = 10;
  expect(res).toBe(expected).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(7);
  const expected = 49;
  expect(res).toBe(expected).toBeA('number');
});

it('should verify first and last names are set', () => {
  var user = utils.setName({}, "First Last");
  expect(user).toInclude({
    firstName: "First"
  }).toInclude({
    lastName: "Last"
  });
});