# Question 13: Reduce, Some, Every and Map

## Aim
To understand and implement JavaScript array methods such as reduce(), some(), every(), and map().

## Theory

### 1. map() Method

The map() method creates a new array by applying a given function to every element of the original array.

It does not directly modify the original array.

Example:
```javascript
let numbers = [1, 2, 3, 4];
let result = numbers.map(num => num * 2);
```

Output:
```text
[2, 4, 6, 8]
```

### 2. reduce() Method

The reduce() method processes all array elements and combines them into a single value.

It uses an accumulator to store the result of each operation.

Syntax:
```javascript
array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);
```

Example:
```javascript
let numbers = [10, 20, 30];
let sum = numbers.reduce((total, num) => total + num, 0);
```

Output:
```text
60
```

### 3. some() Method

The some() method checks whether at least one element of an array satisfies a given condition.

It returns true if at least one element satisfies the condition; otherwise, it returns false.

Example:
```javascript
let numbers = [10, 20, 30];
let result = numbers.some(num => num > 25);
```

Output:
```text
true
```

### 4. every() Method

The every() method checks whether all elements of an array satisfy a given condition.

It returns true if every element satisfies the condition; otherwise, it returns false.

Example:
```javascript
let numbers = [10, 20, 30];
let result = numbers.every(num => num > 5);
```

Output:
```text
true
```

### 5. Difference Between some() and every()

- some() checks whether at least one element satisfies a condition.
- every() checks whether all elements satisfy a condition.
- Both methods return a Boolean value (true or false).

## Code Explanation

1. An array named numbers is created with five numeric values.
2. The map() method multiplies each element by 2 and creates a new array.
3. The reduce() method calculates the sum of all array elements.
4. The some() method checks whether at least one number is greater than 40.
5. The every() method checks whether all numbers are greater than 5.
6. The results are displayed using console.log().

## Output

```text
Doubled: [ 20, 40, 60, 80, 100 ]
Sum: 150
Some greater than 40: true
Every greater than 5: true
```

## Conclusion

This program demonstrates the use of map(), reduce(), some(), and every() methods in JavaScript. These methods make array operations easier, shorter, and more efficient.