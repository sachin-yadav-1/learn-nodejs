# File System Module (FS)

- It helps to interract with the file system.
- There are 2 version available for the methods
  1. Sync
  2. Async

---

# Write File

## 1. `fs.writeFileSync('<filePath>', 'Content that needs to be written')`

- This method allows us to write the content synchronously in the file with the provided file name.
- If the file with the fileName does not exist, it creates a new file itself and then write the content in it.
- If a file exists and there is some text in it, this method will overwrite the file with new text provided.

```
const fs = require('fs');

fs.writeFileSync('./files/test.txt', 'Hi there! I am Sachin.');
```

## 2. `fs.writeFile('<filePath>', 'Content', 'utf8', (err) => {})`

- This function accepts 3 prameters:
  1. Relative path to the file.
  2. Content that we want to write.
  3. Character Encoding (Optional)
  4. Callback function which is called using 1 parameter:
     1. error: Error comes when the file is not written successfully.

```
fs.writeFile('./files/test.txt', 'Hello', 'utf8', (err) => {
  if (err) console.log('Error');
});
```

## 3. `fs.appendFileSync('<filePath>, 'Content')`

- This method will add text at the end of already written text in the file with the provided file name.
- If a file exists and there is some text in it, this method will overwrite the file with new text provided.

```
fs.appendFileSync('./files/test.txt', ' And I\'m from India!');
```

---

# Read File

## 1. `fs.readFileSync('<filePath>')`

- It helps to synchronously read a file from the file system.
- It returns a buffer that we can store in a variable and then if we need, we may convert it into JSON string using `toString()` method on that buffer.
- Alternatively, we can provide character encoding so that we don't have to go through that extra step to convert it to string. `fs.readFileSync('<filePath>', 'utf8')`

```
const dataBuffer = fs.readFileSync('./files/test.txt');
const data = dataBuffer.toString();

const data2 = fs.readFileSync('./files/test.txt', 'utf8');
```

## 2. `fs.readFile('<filePath>', 'utf8', (error, data) => {})`

- This function accepts 2 prameters:
  1. Relative path to the file.
  2. Character Encoding (Optional)
  3. Callback function which is called using 2 parameters:
     1. error: Error comes when the file is not read successfully.
     2. data: Data comes when the file is read successfully.

```
fs.readFile('./file/test.txt', 'utf8', (err, data) => {
  if (err) console.log('Error');
  else console.log(data);
});
```
