# What is Node.js ?

- Node.js is a javascript runtime based on google chrome V8 engine and libuv library.
- It helps us to run javascript code in the server side.
- It helps building fast and highly scalable applications.
- V8 engine is alaso used in web browser environment.
- Runtime: An environment in which a code can be executed.

## Pros, Uses and Cons

### Pros

1. Very lightweight and efficient because it's single threaded and is based on event driven, non-blocking I/O model.
2. Helps us build fast and scalable data-intensive apps.
3. Stable
4. NPM library for packages
5. Very active developer community

### Uses

1. API with database behind it.
2. Data streaming (like youtube and netflix).
3. Real-time chat apps.
4. Server-side web applications.
5. etc.

### Cons

1. Cannot use to build app where heavy server-side processing (CPU-intensive) is required.

---

# How to use node ?

## REPL Environment

1. Install node on the computer.
2. Open Terminal
3. Type `node` and press enter/return key
4. This will then open REPL (Read-Eval-Print-Loop)
5. Now we can write JS code in the terminal
6. To exit REPL, `ctrl + D` or type `.exit` command.

### Check Global Variables

1. Open REPL
2. Hit `tab` twice.
3. It will show a list of all available global variables that we can access.
4. We can also type any of the constructors and then hit `tab` twice to get all the methods available.

`String. // Hit Tab`

### Underscore (\_) varibale

- It stores the result of last operation.

```
4+6       // 10
_ + 1     // 11
```

## Javascript File

1. Create a JS file.
2. Open terminal.
3. Type `node <fileName/relativePathToFileName>` command and press enter.
4. This will execute the javascript file.

---

# Modules in Node.js

- Module Syste in node.js allows us to use modules.
- Node.js comes up with some built-in modules that provides it some additional functionality like reading/writing files, creating server etc.
- We can create our own modules.
- We can also use third-party modules using NPM library (Node Package Manager).

## Why create your own modules ?

- To organize our code and make the code more readable and scalable.

## How to use modules

### Using built-in modules

1. We first need to **require** both built-in and our own modules in order to use them.
2. Some of the node modules are global, that means we do not need to require before we use them for eg. console.
3. Requiring a module simply means importing the module.
4. We use `require` statement to require a module.
5. For built-in module, we specify just the name inside the require function.

```
const fs = require('fs');
```

### Using your own modules

1. Require the module by specifying a relative path to the module inside the require function.
2. For requiring our own module, we need to pass in the **complete relative path** inside require function.

```
const userRoutes = require('./routes/userRoutes');
```

### Using third-party modules

1. Initialize npm using `npm init -y` command.
2. This is going to create a simple config file in json (javascript object notation) format which will allow us to download and manage all the packages that we install from npm library.
3. Install any module from npm library using `npm i <packageName>@<version-number>` command.
4. By default, modules are installed as regular dependencies. This means we require thses modules in order to run our project in both development and production.
5. Add `-g` flag to install any module globally. This installs that particular module on our machine and we do not need to install it again and again for every single project.
6. Add `--save-dev` to install a module as a development dependecy. This means the module is used while developing the project.

---

# Accessing Command Line Arguments

- All the command line arguments are stored in the `argv` object inside of the node `process` object.

### Passing Arg in Terminal

```
node <fileName> delete
```

### Accessing args

```
console.log(process.argv); // array['relative path to node exe', 'relative path to current file', 'arg that we provide',...]

console.log(process.argv[2]); // delete
```

---

# Debugging in Node.js

## 1. Using `console.log()`

- Output using `console.log()` to check the output at certain specific points in the program.

## 2. Using `debugger`

- We ever we user `debugger;` in our code, the code execution will stop at that line and we can then debug in the developer console.

1. Use `debugger;` on the line from where you want to debug the code.
2. In the terminal, type `node inspect <fileName>` and hit enter/return key.
3. Open chrome and visit the following url: chrome://inspect/#devices
4. Under the 'Remote Target' section, click on the **inpect** to reach the debugger.
