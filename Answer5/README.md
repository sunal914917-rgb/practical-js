# Question 5: Arrays, Array Methods and Nested Arrays

## Aim
To understand arrays, different array methods and nested arrays in JavaScript.

## Theory

### 1. What is an Array?
An array is a special variable used to store multiple values in a single variable. Arrays can store different types of data such as numbers, strings and objects.

In JavaScript, arrays are created using square brackets `[]`. Each element has an index, starting from 0.

### 2. Array Methods
JavaScript provides several built-in methods to perform operations on arrays.

- **push():** Adds a new element at the end of an array.
- **pop():** Removes the last element from an array.
- **unshift():** Adds a new element at the beginning of an array.
- **shift():** Removes the first element from an array.
- **length:** Returns the total number of elements in an array.

### 3. What is a Nested Array?
A nested array is an array that contains one or more arrays as its elements.

Nested arrays are useful for storing data in rows and columns, such as tables and matrices.

### 4. Accessing Array Elements
Array elements are accessed using their index numbers. In nested arrays, two indexes are used to access an element.

For example, `numbers[1][0]` accesses the first element of the second inner array.

## Code Explanation
The program creates an array of fruits and performs different operations using push(), pop(), unshift() and shift() methods. It also displays the length of the array and demonstrates how to create and access elements of a nested array.

## Output
```text
Original Array: [ 'Apple', 'Banana', 'Mango' ]
After Push: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
After Pop: [ 'Apple', 'Banana', 'Mango' ]
After Unshift: [ 'Grapes', 'Apple', 'Banana', 'Mango' ]
After Shift: [ 'Apple', 'Banana', 'Mango' ]
Array Length: 3
Nested Array: [ [ 1, 2 ], [ 3, 4 ] ]
Element: 3
```

## Conclusion
Successfully created arrays, performed different array operations using built-in methods and accessed elements of nested arrays in JavaScript.