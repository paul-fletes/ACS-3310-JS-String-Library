const strFunc = require('../index');

test('capitalize capitalizes a sentence', () => {
  expect(strFunc.capitalize('hello, how are you?')).toBe('Hello, how are you?');
});

test('allCaps capitalizes a string', () => {
  expect(strFunc.allCaps('hello')).toBe('HELLO');
});

test('capitalizeWords capitalizes each word in a string', () => {
  expect(strFunc.capitalizeWords('hello world')).toBe('Hello World');
});

test('removeExtraSpaces removes all spaces from a string', () => {
  expect(strFunc.removeExtraSpaces('   hello   world   ')).toBe('hello world');
});

test('kebobCase replaces spaces with hyphens and makes all letters lowercase', () => {
  expect(strFunc.kebobCase('hello world')).toBe('hello-world');
});

test('snakeCase replaces spaces with underscores and makes all letters lowercase', () => {
  expect(strFunc.snakeCase('hello world')).toBe('hello_world');
});

test('camelCase removes spaces and capitalizes all words except for the first', () => {
  expect(strFunc.camelCase('hello world')).toBe('helloWorld');
});

test('shift moves the first character of a string to the end', () => {
  expect(strFunc.shift('hello')).toBe('elloh');
});

test('makeHashTag returns a string of capitalized words prefixed by a "#"', () => {
  expect(strFunc.makeHashTag('hello world')).toBe('#HelloWorld');
});

test('isEmpty returns true if a string is empty or contains only whitespace', () => {
  expect(strFunc.isEmpty('')).toBe(true);
  expect(strFunc.isEmpty(' ')).toBe(true);
  expect(strFunc.isEmpty('hello')).toBe(false);
});