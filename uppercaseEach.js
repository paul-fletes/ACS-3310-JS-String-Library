// uppercase the first letter of every word in a string

function uppercaseEach(str) {
  return str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(uppercaseEach('hello world')); // Hello World
console.log(uppercaseEach('mommy made me eat my M&Ms')); // Mommy Made Me Eat My M&ms

module.exports = uppercaseEach;
