# Question 15: Promises and async/await with Local Data

## Aim
To understand and implement JavaScript Promises and async/await by working with local data.

## Theory

### 1. What is a Promise?
A Promise is an object in JavaScript that represents the result of an asynchronous operation.

A Promise can have three states:

- **Pending:** The operation is still in progress.
- **Fulfilled:** The operation has completed successfully.
- **Rejected:** The operation has failed.

### 2. Promise Methods

JavaScript provides methods to handle Promises:

- **then():** Executes when the Promise is fulfilled.
- **catch():** Executes when the Promise is rejected.
- **finally():** Executes after the Promise is settled, whether successful or rejected.

### 3. What is async/await?
`async` and `await` are used to handle asynchronous operations in a simpler and more readable way.

- **async:** Makes a function return a Promise.
- **await:** Waits for a Promise to settle before continuing execution inside the async function.

### 4. What is Local Data?
Local data means data stored directly inside the program, such as an array or an object. In this program, student records are stored in a local array.

### 5. Error Handling
The `try...catch` block is used with async/await to handle errors.

- `try` contains the code that may produce an error.
- `catch` handles the error if one occurs.

## Code Explanation

1. An array named `students` stores the ID, name and marks of three students.
2. The `getStudents()` function returns a Promise.
3. If student data is available, the Promise is resolved using `resolve()`.
4. If the array is empty, the Promise is rejected using `reject()`.
5. The `then()` method displays the data when the Promise is successful.
6. The `catch()` method handles errors.
7. The `displayStudents()` function uses `async/await` to retrieve and display student records.
8. The `try...catch` block handles errors during asynchronous execution.

## Expected Output

```text
Student Data using Promise:
[
  { id: 1, name: 'Arvind', marks: 85 },
  { id: 2, name: 'Rahul', marks: 90 },
  { id: 3, name: 'Aman', marks: 78 }
]
Student Data using Async/Await:
Name: Arvind | Marks: 85
Name: Rahul | Marks: 90
Name: Aman | Marks: 78
```

## Conclusion

In this program, we learned how to work with local data using JavaScript Promises and async/await. We also understood how to handle successful results and errors using `then()`, `catch()` and `try...catch`. These concepts help us manage asynchronous operations in JavaScript.
