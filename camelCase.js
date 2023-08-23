// lowercases the first character of the string and uppercases first character of all other words,
// and removes spaces
const capitalizeWords = require('./capitalizeWords');

function camelCase(str) {
  const words = str.split(' ');
  const camel = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return capitalizeWords(word);
  });
  return camel.join('');
}

module.exports = camelCase;
