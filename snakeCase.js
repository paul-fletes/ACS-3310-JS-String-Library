// removes extra spaces and replaces spaces with underscores, and makes all characters lowercase

function snakeCase(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}

module.exports = snakeCase;
