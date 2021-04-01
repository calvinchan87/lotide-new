// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countLetters = function(itemToCount) {
  const results = {};

  for (const character of itemToCount) {
    if (results[character]) {
      results[character] += 1;
    } else {
      results[character] = 1;
    }
  }

  delete results[" "];
  return results;
};

const phrase = "lighthouse in the house";

console.log(countLetters(phrase));

assertEqual(countLetters(phrase)["l"], 1);
assertEqual(countLetters(phrase)["i"], 2);
assertEqual(countLetters(phrase)["g"], 1);
assertEqual(countLetters(phrase)["h"], 4);
assertEqual(countLetters(phrase)["t"], 2);
assertEqual(countLetters(phrase)["o"], 2);
assertEqual(countLetters(phrase)["u"], 2);
assertEqual(countLetters(phrase)["s"], 2);
assertEqual(countLetters(phrase)["e"], 3);
assertEqual(countLetters(phrase)["n"], 1);