# Question 11: Scope and Closures

## Aim
To understand different types of scope in JavaScript and learn how closures work using functions and variables.

## Theory

### 1. Scope in JavaScript
Scope determines where a variable can be accessed or used in a JavaScript program.

JavaScript mainly has three types of scope:
- Global Scope
- Function Scope
- Block Scope

### 2. Global Scope
A variable declared outside all functions and blocks is called a global variable.

It can be accessed from different parts of the program.

Example:
```javascript
let globalVar = "Hello";

function show() {
    console.log(globalVar);
}
show();
```

Here, globalVar is declared outside the function, so it can be accessed inside the function.

### 3. Function Scope
A variable declared inside a function using var, let, or const is available within that function.

It cannot normally be accessed outside the function.

Example:
```javascript
function display() {
    let message = "Hello JavaScript";
    console.log(message);
}
display();
```

Here, message is a function-scoped local variable.

### 4. Block Scope
A block is a section of code enclosed within curly brackets `{ }`.

Variables declared using let and const inside a block are accessible only within that block.

Example:
```javascript
if (true) {
    let number = 10;
    console.log(number);
}
```

Here, number is accessible inside the if block but not outside it.

### 5. Closures in JavaScript
A closure is created when an inner function remembers and accesses variables from its outer function, even after the outer function has finished executing.

Example:
```javascript
function outerFunction() {
    let count = 0;

    return function innerFunction() {
        count++;
        console.log(count);
    };
}

const counter = outerFunction();

counter();
counter();
```

In this example:
- outerFunction creates a variable named count.
- innerFunction accesses and updates count.
- outerFunction returns innerFunction.
- The returned function remembers the count variable.

### 6. Uses of Closures
Closures are useful for:
- Maintaining