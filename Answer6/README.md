# Question 6: JSON Text

## Aim
To understand JSON (JavaScript Object Notation) and perform conversion between JavaScript objects and JSON text.

## Theory

### 1. What is JSON?
JSON stands for JavaScript Object Notation. It is a lightweight data format used to store and exchange data between applications.

JSON is easy to read and write. It is commonly used in web applications and APIs to transfer information between a client and a server.

### 2. JSON Syntax
JSON stores data in key-value pairs.

- Data is written inside curly braces `{}`.
- Keys must be written inside double quotes.
- String values must also use double quotes.
- Key and value are separated by a colon `:`.
- Multiple pairs are separated by commas.

### 3. JSON.stringify()
The `JSON.stringify()` method converts a JavaScript object into a JSON string.

It is useful when data needs to be sent or stored in JSON format.

### 4. JSON.parse()
The `JSON.parse()` method converts a valid JSON string into a JavaScript object.

After conversion, we can access its properties using dot notation.

### 5. Uses of JSON
- Data exchange between client and server.
- Storing structured information.
- Working with web APIs.
- Transferring data between different applications.

## Code Explanation
First, a JavaScript object containing student information is created. The `JSON.stringify()` method converts this object into JSON text. Then, `JSON.parse()` converts the JSON text back into a JavaScript object. Finally, individual student details are displayed using dot notation.

## Output
```text
JSON Text: {"name":"Arvind","age":20,"course":"B.Tech"}
Student Name: Arvind
Student Age: 20
Course: B.Tech
```

## Conclusion
Successfully created JSON text and performed conversion between JavaScript objects and JSON strings using `JSON.stringify()` and `JSON.parse()`.