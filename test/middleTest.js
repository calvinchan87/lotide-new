// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
// const middle = require('../middle');

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

// TEST CODE
// assertArraysEqual(eqArrays(middle([1]), []), true); // => []
// assertArraysEqual(eqArrays(middle([1, 2]), []), true); // => []

// assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => [2]
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true); // => [3]

// assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => [2, 3]
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true); // => [3, 4]