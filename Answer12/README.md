# Question 12: Callbacks and Higher-Order Functions

## Aim
To understand callback functions and higher-order functions in JavaScript and implement array methods such as map(), filter(), and forEach().

## Theory

### 1. Callback Functions

A callback function is a function that is passed as an argument to another function and is executed inside that function.

Callbacks are useful for controlling the execution of code and handling operations that need another function to run.

Example:
```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
```

Here, callback is a function parameter that receives another function.

### 2. Higher-Order Functions

A higher-order function is a function that takes another function as an argument or returns a function.

It helps make JavaScript programs reusable, flexible, and easier to manage.

Example:
```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}
```

Here, calculate is a higher-order function because it accepts another function as an argument.

### 3. map() Method

The map() method creates a new array by applying a function to every element of the original array.

It does not directly modify the original array.

Example:
```javascript
let numbers = [1, 2, 3, 4];

let squares = numbers.map(num => num * num);
```

Output:
```text
[1, 4, 9, 16]
```

### 4. filter() Method

The filter() method creates a new array containing only those elements that satisfy a given condition.

Example:
```javascript
let numbers = [1, 2, 3, 4, 5];

let even = numbers.filter(num => num % 2 === 0);
```

Output:
```text
[2, 4]
```

### 5. forEach() Method

The forEach() method executes a given function once for each element of an array.

It is commonly used to display or process array elements.

Example:
```javascript
let numbers = [1, 2, 3];

numbers.forEach(num => {
    console.log(num);
});
```

Output:
```text
1
2
3
```

### 6. Arrow Functions

Arrow functions provide a shorter syntax for writing functions in JavaScript.

Example:
```javascript
const add = (a, b) => a + b;
```

They are commonly used with array methods such as map(), filter(), and forEach().

## Code Explanation

1. The greet() function accepts a name and a callback function.
2. The message() function is passed as a callback.
3. The calculate() function accepts two numbers and an operation function.
4. The add() function performs addition.
5. The map() method calculates the square of every array element.
6. The filter() method selects even numbers from the array.
7. The forEach() method displays every element of the array.

## Output

```text
Hello Arvind
Welcome to JavaScript
Addition: 30
Squares: [ 1, 4, 9, 16, 25 ]
Even Numbers: [ 2, 4 ]
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```

## Conclusion

This program demonstrates callback functions, higher-order functions, arrow functions, and array methods in JavaScript. These concepts help write reusable, flexible, and efficient code.