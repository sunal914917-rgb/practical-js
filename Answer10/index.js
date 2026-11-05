// Creating an Object
const student = {
    name: "Arvind",
    age: 20,
    course: "B.Tech",
    marks: 85
};

// Accessing Object Properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);

// Adding a New Property
student.city = "Dehradun";
console.log("City:", student.city);

// Object Destructuring
const { name, age, marks } = student;

console.log("Destructured Name:", name);
console.log("Destructured Age:", age);
console.log("Destructured Marks:", marks);

// Destructuring with New Variable Names
const { course: branch } = student;
console.log("Branch:", branch);

// Nested Object
const employee = {
    name: "Rahul",
    address: {
        city: "Delhi",
        state: "India"
    }
};

console.log("Employee City:", employee.address.city);

const { address: { city } } = employee;
console.log("Destructured City:", city);