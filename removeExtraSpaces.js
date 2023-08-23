// removes all extra spaces from a string

function removeExtraSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
}

module.exports = removeExtraSpaces;
