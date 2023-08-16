// uppercase the first letter of a string

function uppercase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(uppercase('hello world')); // Hello world
console.log(uppercase('foo')); // Foo

module.exports = uppercase;
