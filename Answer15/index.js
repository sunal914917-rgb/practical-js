// Local Data
const students = [
    { id: 1, name: "Arvind", marks: 85 },
    { id: 2, name: "Rahul", marks: 90 },
    { id: 3, name: "Aman", marks: 78 }
];

// Promise
function getStudents() {
    return new Promise((resolve, reject) => {
        if (students.length > 0) {
            resolve(students);
        } else {
            reject("No student data found");
        }
    });
}

// Using Promise with then() and catch()
getStudents()
    .then(data => {
        console.log("Student Data using Promise:");
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Using async/await
async function displayStudents() {
    try {
        const data = await getStudents();

        console.log("Student Data using Async/Await:");

        data.forEach(student => {
            console.log(
                "Name:", student.name,
                "| Marks:", student.marks
            );
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

displayStudents();