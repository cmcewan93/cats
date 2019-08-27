// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {cb(data)} else {
      cb(undefined);
    }
  });
}

// we try to get the return value
//const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay) // => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;