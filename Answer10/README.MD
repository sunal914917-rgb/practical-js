# Question 10: Objects and Destructuring

## Aim
To understand JavaScript objects, object properties, nested objects, and object destructuring.

## Theory

### 1. JavaScript Objects
An object is a collection of related data stored in key-value pairs.

Each key is called a property, and its associated value can be a string, number, boolean, array, function, or another object.

Example:
```javascript
const student = {
    name: "Arvind",
    age: 20,
    course: "B.Tech"
};
```

Here, name, age, and course are properties of the student object.

### 2. Accessing Object Properties
Object properties can be accessed in two ways:

**Dot Notation:**
```javascript
console.log(student.name);
```

**Bracket Notation:**
```javascript
console.log(student["age"]);
```

Both methods are used to access values stored inside an object.

### 3. Adding and Modifying Properties
New properties can be added to an object using dot notation.

Example:
```javascript
student.city = "Dehradun";
```

An existing property can also be modified by assigning it a new value.

Example:
```javascript
student.age = 21;
```

### 4. Object Destructuring
Destructuring is a JavaScript feature that allows us to extract properties from an object and store them in separate variables.

Example:
```javascript
const { name, age } = student;
```

Here, the name and age properties are extracted from the student object and stored in variables.

It makes code shorter and easier to read.

### 5. Destructuring with New Variable Names
We can assign an object property to a variable with a different name.

Example:
```javascript
const { course: branch } = student;
```

Here, the course property is stored in a new variable named branch.

### 6. Nested Objects
An object can contain another object as its property. Such objects are called nested objects.

Example:
```javascript
const employee = {
    name: "Rahul",
    address: {
        city: "Delhi",
        state: "India"
    }
};
```

The nested properties can be accessed using multiple dot operators.

Example:
```javascript
console.log(employee.address.city);
```

We can also extract nested properties using nested destructuring.

Example:
```javascript
const { address: { city } } = employee;
```

## Code Explanation

1. A student object is created with name, age, course, and marks properties.
2. Dot notation is used to access object properties.
3. A new city property is added to the student object.
4. Object destructuring extracts name, age, and marks into separate variables.
5. The course property is assigned to a new variable named branch.
6. A nested employee object is created with address information.
7. Nested destructuring extracts the city property.

## Output

The program displays student details, the newly added city, destructured properties, and nested employee address information.

## Conclusion

This program demonstrates JavaScript objects, accessing and adding properties, object destructuring, renaming variables during destructuring, and nested objects. These concepts help organize and access related data efficiently in JavaScript.