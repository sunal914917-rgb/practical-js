
// Constructor Function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let s1 = new Student("Arvind", 20);

console.log("Constructor Function:");
console.log(s1.name, s1.age);

// Class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log(this.name, this.salary);
    }
}

let e1 = new Employee("Rahul", 25000);

console.log("Class:");
e1.display();
