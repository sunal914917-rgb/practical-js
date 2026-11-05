
// 1. If-Else Condition
let number = 15;

if (number > 0) {
    console.log("Number is Positive");
} else if (number < 0) {
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
}

// 2. Even or Odd
let num = 10;

if (num % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// 3. Switch Statement
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid Day");
}

// 4. For Loop
console.log("For Loop:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 5. While Loop
console.log("While Loop:");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// 6. Sum of First 10 Natural Numbers
let sum = 0;

for (let j = 1; j <= 10; j++) {
    sum += j;
}

console.log("Sum of first 10 numbers:", sum);
