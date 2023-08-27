# ACS-3310-JS-STRING-LIBRARY

A collection of helper functions for string manipulation in JavaScript. Assignment for Applied Computer Science 3310-Javascript Libraries Fall 2023.

## Installation

You can install this library via npm:

```bash
npm install @paul-fletes/acs-3310-js-string-library
```

## Usage 

You can use the string manipulation functions by requiring them in your files:

```bash
const strFunc = require('acs-3310-js-string-library');

// Use the helper functions
const inputString = 'Hello, world!';
const result = strFunc.capitalize(inputString);
console.log(result); // Output: 'Hello, world!'
```

## Available Functions

The following helper functions are available to use:

- allCaps(input: string): string
- camelCase(input: string): string
- capitalize(input: string): string
- capitalizeWords(input: string): string
- isEmpty(input: string): boolean
- kebabCase(input: string): string
- makeHashTag(input: string): string
- removeExtraSpaces(input: string): string
- shift(input: string): string
- snakeCase(input: string): string

