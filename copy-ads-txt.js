const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'public', 'ads.txt');
const destinationFile = path.join(__dirname, 'build', 'ads.txt');

fs.copyFile(sourceFile, destinationFile, (err) => {
  if (err) throw err;
  console.log('ads.txt was copied to build folder');
});