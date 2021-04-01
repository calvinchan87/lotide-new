// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let x = 0; x < arrayOne.length; x++) {
    if (arrayOne[x] !== arrayTwo[x]) {
      return false;
    }
  }
  return true;
};

// ACTUAL FUNCTION
const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  }

  if (array.length % 2 === 1) {
    newArray.push(array[(array.length - 1) / 2]);
  } else {
    newArray.push(array[(array.length) / 2 - 1]);
    newArray.push(array[(array.length) / 2]);
  } return newArray;
};

// TEST CODE
assertArraysEqual(eqArrays(middle([1]), []), true); // => []
assertArraysEqual(eqArrays(middle([1, 2]), []), true); // => []

assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => [2]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true); // => [3]

assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => [2, 3]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true); // => [3, 4]