const fs = require('fs');

// 1) Write file Sync
fs.writeFileSync('./files/test.txt', 'Hello there! I am Sachin.');

// 2) Append file sync
fs.appendFileSync('./files/test.txt', ' And I am from India!');

// Read File Sync
const dataBuffer = fs.readFileSync('./fs-module/files/test.txt', 'utf-8');
console.log(dataBuffer);

// Read File Async
fs.readFile('./file/test.txt', 'utf8', (err, data) => {
  if (err) console.log('Error');
  else console.log(data);
});

// Write File Async
fs.writeFile('./files/test.txt', 'Hello', 'utf8', (err) => {
  if (err) console.log('Error');
});
