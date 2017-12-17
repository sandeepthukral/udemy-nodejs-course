const expect = require("expect");
const utils = require("./utils");

it('should add two numbers', () => {
  var res = utils.add(3,7);
  const expected = 10;
  expect(res).toBe(expected).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(3, 4, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(7);
  const expected = 49;
  expect(res).toBe(expected).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(7, (square) => {
    expect(square).toBe(49).toBeA('number');
    done();
  })
});

it('should verify first and last names are set', () => {
  var user = utils.setName({}, "First Last");
  expect(user).toInclude({
    firstName: "First"
  }).toInclude({
    lastName: "Last"
  });
});