# Question 9: DOM, Validation, Storage and Quiz

## Aim
To create a simple JavaScript Quiz application using DOM manipulation, form validation, and local storage.

## Theory

### 1. DOM (Document Object Model)
DOM stands for Document Object Model. It represents an HTML document as a tree of objects.

JavaScript uses the DOM to access and modify HTML elements dynamically.

**Common DOM Methods:**
- `document.getElementById()` – Selects an HTML element using its ID.
- `innerText` – Changes or retrieves the text inside an element.
- `value` – Gets the value entered by the user in an input field.

### 2. Form Validation
Form validation is the process of checking user input before processing it.

It helps prevent empty or invalid data from being submitted.

In this program:
- `trim()` removes extra spaces from the beginning and end of a string.
- An `if` condition checks whether the input is empty.
- If the input is empty, an error message is displayed.

### 3. Local Storage
Local Storage is a browser feature used to store data as key-value pairs.

The stored data remains available even after refreshing or closing the browser.

**Common Methods:**
- `localStorage.setItem()` – Stores data.
- `localStorage.getItem()` – Retrieves stored data.
- `localStorage.removeItem()` – Removes a particular item.

In this program, the quiz score is stored using `localStorage.setItem()`.

### 4. JavaScript Quiz
A