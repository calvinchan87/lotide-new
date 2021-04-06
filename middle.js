// FUNCTION IMPLEMENTATION
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

module.exports = middle;