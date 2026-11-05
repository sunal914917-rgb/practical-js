// setTimeout()
console.log("Timer Started");

setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);


// setInterval()
let count = 1;

let timer = setInterval(() => {
    console.log("Count:", count);
    count++;

    if (count > 5) {
        clearInterval(timer);
        console.log("Interval Stopped");
    }
}, 1000);