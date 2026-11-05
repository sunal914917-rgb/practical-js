# Question 7: Constructor Functions and Classes

## Aim
To understand and implement constructor functions and classes in JavaScript.

## Theory

### 1. Constructor Function
A constructor function is a special type of function used to create and initialize multiple objects with similar properties.

It is called using the `new` keyword. Inside a constructor function, the `this` keyword refers to the newly created object.

### 2. The new Keyword
The `new` keyword is used to create a new object from a constructor function or class.

It automatically creates an object, sets the value of `this` to that object and returns it.

### 3. What is a Class?
A class is a blueprint for creating objects. JavaScript introduced class syntax in ES6 to make object-oriented programming easier and more organized.

A class can contain properties and methods.

### 4. Constructor Method
The `constructor()` method is a special method inside a class. It is automatically called when a new object is created.

It is mainly used to initialize object properties.

### 5. The this Keyword
The `this` keyword refers to the current object. It is used to access and assign properties and methods of an object.

### 6. Difference Between Constructor Functions and Classes
- Constructor functions use the traditional function syntax.
- Classes use the `class` keyword.
- Both can create multiple objects with similar properties.
- Classes provide a cleaner syntax for object-oriented programming.

## Code Explanation
The program first creates a Student constructor function with name and age properties. An object is created using the `new` keyword.

Next, an Employee class is created with a constructor and a display method. An employee object is created and its details are displayed using the method.

## Output
```text
Constructor Function:
Arvind 20
Class:
Rahul 25000
```

## Conclusion
Successfully implemented constructor functions and ES6 classes in JavaScript to create and initialize objects.