// takes the first character of a string and moves it to the end of the string

function shift(str) {
  return str.slice(1) + str[0];
}

module.exports = shift;
