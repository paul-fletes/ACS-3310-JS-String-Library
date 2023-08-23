// Removes extra spaces and replaces space with a dash, also lowercases the string

function kebobCase(str) {
  return str.replace(/\s+/g, ' ').trim().toLowerCase().replace(/\s/g, '-');
}

module.exports = kebobCase;
