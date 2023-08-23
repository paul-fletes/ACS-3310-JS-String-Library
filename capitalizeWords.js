// uppercase the first letter of every word in a string

function capitalizeWords(str) {
  return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

module.exports = capitalizeWords;
