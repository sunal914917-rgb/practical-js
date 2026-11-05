// Callback Function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome to JavaScript");
}

greet("Arvind", message);


// Higher-Order Function
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log("Addition:", calculate(10, 20, add));


// map() Method
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);
console.log("Squares:", squares);


// filter() Method
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);


// forEach() Method
numbers.forEach(num => {
    console.log("Number:", num);
});