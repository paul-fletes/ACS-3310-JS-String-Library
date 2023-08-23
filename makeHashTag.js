// convert a string to a hashtag (Capitalized words with a leading # symbol)

function makeHashTag(str) {
  const words = str.split(' ');
  let hashTag = '#';
  for (let i = 0; i < words.length; i += 1) {
    hashTag += words[i][0].toUpperCase() + words[i].slice(1);
  }
  return hashTag;
}

module.exports = makeHashTag;
