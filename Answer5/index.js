
// Creating an Array
let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);

// Array Methods
fruits.push("Orange");
console.log("After Push:", fruits);

fruits.pop();
console.log("After Pop:", fruits);

fruits.unshift("Grapes");
console.log("After Unshift:", fruits);

fruits.shift();
console.log("After Shift:", fruits);

// Array Length
console.log("Array Length:", fruits.length);

// Nested Array
let numbers = [
    [1, 2],
    [3, 4]
];

console.log("Nested Array:", numbers);
console.log("Element:", numbers[1][0]);
