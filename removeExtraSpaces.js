// removes all extra spaces from a string

function removeExtraSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
}

console.log(removeExtraSpaces('hello       world')); // hello world
console.log(removeExtraSpaces('   foo')); // foo

module.exports = removeExtraSpaces;