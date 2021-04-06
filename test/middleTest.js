const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

// TEST CODE
assertArraysEqual(eqArrays(middle([1]), []), true); // => []
assertArraysEqual(eqArrays(middle([1, 2]), []), true); // => []

assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => [2]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true); // => [3]

assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => [2, 3]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true); // => [3, 4]