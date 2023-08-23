// Importing the helper functions
import allCaps from './allCaps';
import camelCase from './camelCase';
import capitalize from './capitalize';
import capitalizeWords from './capitalizeWords';
import isEmpty from './isEmpty';
import kebabCase from './kebobCase';
import makeHashTag from './makeHashTag';
import removeExtraSpaces from './removeExtraSpaces';
import shift from './shift';
import snakeCase from './snakeCase';

// Now you can use these functions in your index.js
const inputString = 'some input string';

const result1 = allCaps(inputString);
const result2 = camelCase(inputString);
const result3 = capitalize(inputString);
const result4 = capitalizeWords(inputString);
const result5 = isEmpty(inputString);
const result6 = kebabCase(inputString);
const result7 = makeHashTag(inputString);
const result8 = removeExtraSpaces(inputString);
const result9 = shift(inputString);
const result10 = snakeCase(inputString);

console.log('allCaps:', result1);
console.log('camelCase:', result2);
console.log('capitalize:', result3);
console.log('capitalizeWords:', result4);
console.log('isEmpty:', result5);
console.log('kebabCase:', result6);
console.log('makeHashTag:', result7);
console.log('removeExtraSpaces:', result8);
console.log('shift:', result9);
console.log('snakeCase:', result10);
