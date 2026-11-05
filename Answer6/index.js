
// JavaScript Object
let student = {
    name: "Arvind",
    age: 20,
    course: "B.Tech"
};

// Convert Object into JSON String
let jsonData = JSON.stringify(student);
console.log("JSON Text:", jsonData);

// Convert JSON String into Object
let newStudent = JSON.parse(jsonData);
console.log("Student Name:", newStudent.name);
console.log("Student Age:", newStudent.age);
console.log("Course:", newStudent.course);
