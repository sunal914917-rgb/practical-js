# Question 8: Inheritance, Methods and Composition

## Aim
To understand and implement inheritance, methods, method overriding and composition in JavaScript.

## Theory

### 1. What is Inheritance?
Inheritance is an object-oriented programming concept in which one class can acquire the properties and methods of another class.

It helps in code reusability and reduces code duplication.

In JavaScript, inheritance is implemented using the `extends` keyword.

### 2. Parent and Child Classes
- **Parent Class:** The class whose properties and methods are inherited by another class.
- **Child Class:** The class that inherits properties and methods from the parent class.

A child class can use the methods of its parent class and can also define its own methods.

### 3. Methods
Methods are functions defined inside a class or object. They are used to perform specific operations.

For example, `eat()` and `bark()` are methods in the program.

### 4. Method Overriding
Method overriding occurs when a child class defines a method with the same name as a method in its parent class.

When the method is called using the child object, the child's version is executed.

### 5. What is Composition?
Composition is a programming technique in which an object is created by combining different functionalities from multiple objects.

Instead of depending only on inheritance, composition allows us to combine reusable features.

In JavaScript, `Object.assign()` can be used to copy properties and methods from multiple objects into another object.

### 6. Advantages
- Promotes code reusability.
- Reduces code duplication.
- Makes programs easier to maintain.
- Allows objects to combine different functionalities.

## Code Explanation
The program creates an Animal parent class and a Dog child class using inheritance. The Dog class uses the eat() method inherited from Animal and defines its own bark() method.

Next, method overriding is demonstrated using Parent and Child classes. Finally, composition is implemented by combining walking and swimming functionalities into a single person object using Object.assign().

## Output
```text
Animal is eating
Dog is barking
Child Method
Walking
Swimming
```

## Conclusion
Successfully implemented inheritance, methods, method overriding and composition in JavaScript.