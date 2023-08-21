// uppercase all letters in a string

function allCaps(str) {
  return str.toUpperCase();
}

console.log(allCaps('hello world')); // HELLO WORLD
console.log(allCaps('foo')); // FOO

module.exports = allCaps;