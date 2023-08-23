// returns true if given string is empty or contains only whitespace

function isEmpty(str) {
  const breaks = ['\n', '\r', '\t'];
  const trimmed = breaks.includes(str) ? str.replace(/\n/g, '').trim() : str.trim();
  return trimmed.length === 0;
}

module.exports = isEmpty;
