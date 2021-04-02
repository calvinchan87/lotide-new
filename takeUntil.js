const takeUntil = function(array, callback) {
  // ...
  // The function will return a "slice of the array with elements taken from the beginning."
  // It should keep going until the callback/predicate returns a truthy value.
  // To keep things simple, the callback should only be provided one value: The item in the array.
  let newArray = [];
  for (let number of array) {
    if (callback(number) === false) {
      newArray.push(number);
    } else {
      return newArray;
    }
  } return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


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


// TEST CODE

assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true); // => true
assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true); // => true
assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7 ]), false); // => false
assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to' ]), false); // => false
assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2, -1 ]), false); // => false
assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood', ',' ]), false); // => false