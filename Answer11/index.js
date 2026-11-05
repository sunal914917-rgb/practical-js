// Global Scope
let globalVar = "I am Global";

function showGlobal() {
    console.log(globalVar);
}

showGlobal();


// Function Scope
function showFunction() {
    let functionVar = "I am Function Scoped";
    console.log(functionVar);
}

showFunction();


// Block Scope
if (true) {
    let blockVar = "I am Block Scoped";
    console.log(blockVar);
}


// Closure
function outerFunction() {
    let count = 0;

    return function innerFunction() {
        count++;
        console.log("Count:", count);
    };
}

const counter = outerFunction();

counter();
counter();
counter();