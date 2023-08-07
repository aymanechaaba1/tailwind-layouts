'use strict';

// Character Frequency
const word = 'Aymane Chaaba';

console.log(
  [...word]
    .map((char) => char.toLowerCase())
    .reduce((count, char) => {
      {
        char: count;
      }
    }, {})
);
