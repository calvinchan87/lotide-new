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

const letterPositions = function(sentence) {
  const results = {};
  
  for (const character of sentence) {
    if (results[character] === undefined) {
      results[character] = [sentence.indexOf(character)];
    } else {
      results[character].push(sentence.indexOf(character, (results[character][results[character].length - 1] + 1)));
    }
  }

  delete results[" "];
  return results;

};

const phrase = "lighthouse in the house";

console.log(letterPositions(phrase));

assertArraysEqual(eqArrays(letterPositions(phrase)["l"], [0]), true);
assertArraysEqual(eqArrays(letterPositions(phrase)["i"], [1, 11]), true);
assertArraysEqual(eqArrays(letterPositions(phrase)["g"], [2]), true);
assertArraysEqual(eqArrays(letterPositions(phrase)["h"], [3, 5, 15, 18]), true);
assertArraysEqual(eqArrays(letterPositions(phrase)["t"], [4, 14]), true);
assertArraysEqual(eqArrays(letterPositions(phrase)["o"], [6, 19]), true);
assertArraysEqual(eqArrays(letterPositions(phrase)["u"], [7, 20]), true);
assertArraysEqual(eqArrays(letterPositions(phrase)["s"], [8, 21]), true);
assertArraysEqual(eqArrays(letterPositions(phrase)["e"], [9, 16, 22]), true);
assertArraysEqual(eqArrays(letterPositions(phrase)["n"], [12]), true);