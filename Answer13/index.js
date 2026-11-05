let numbers = [10, 20, 30, 40, 50];

// map() - Multiply each element by 2
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// reduce() - Calculate sum
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// some() - Check if any number is greater than 40
let hasGreater = numbers.some(num => num > 40);
console.log("Some greater than 40:", hasGreater);

// every() - Check if all numbers are greater than 5
let allGreater = numbers.every(num => num > 5);
console.log("Every greater than 5:", allGreater);