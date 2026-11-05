# Question 14: Timers and Intervals

## Aim
To understand and implement JavaScript timers using setTimeout(), setInterval(), clearTimeout(), and clearInterval().

## Theory

### 1. Timers in JavaScript

JavaScript provides timer functions that allow code to execute after a specified time or repeatedly at regular intervals.

These functions are useful for delayed operations, animations, notifications, and countdowns.

### 2. setTimeout() Method

The setTimeout() method executes a function only once after a specified delay.

Syntax:
```javascript
setTimeout(function, delay);
```

Here:
- function: The function to execute.
- delay: The waiting time in milliseconds.

Example:
```javascript
setTimeout(() => {
    console.log("Hello JavaScript");
}, 2000);
```

The message is displayed after approximately 2 seconds.

### 3. setInterval() Method

The setInterval() method repeatedly executes a function after a specified time interval.

Syntax:
```javascript
setInterval(function, interval);
```

Example:
```javascript
setInterval(() => {
    console.log("Hello");
}, 1000);
```

This code displays Hello approximately every second until the interval is stopped.

### 4. clearTimeout() Method

The clearTimeout() method cancels a timeout that was previously created using setTimeout().

Example:
```javascript
let timer = setTimeout(() => {
    console.log("Hello");
}, 3000);

clearTimeout(timer);
```

Here, the scheduled message is cancelled before it executes.

### 5. clearInterval() Method

The clearInterval() method stops a repeated execution created using setInterval().

Example:
```javascript
let timer = setInterval(() => {
    console.log("Running");
}, 1000);

clearInterval(timer);
```

Here, the interval is stopped using its timer ID.

### 6. Time in JavaScript

JavaScript timer delays are specified in milliseconds.

- 1000 milliseconds = 1 second
- 2000 milliseconds = 2 seconds
- 5000 milliseconds = 5 seconds

Timer delays are approximate and may be longer depending on the execution environment.

## Code Explanation

1. The program displays a message when the timer starts.
2. setTimeout() displays a message after approximately 2 seconds.
3. A variable named count stores the current counting value.
4. setInterval() displays the count approximately every second.
5. The count increases after every execution.
6. clearInterval() stops the interval after the count reaches 5.

## Output

```text
Timer Started
Count: 1
Count: 2
This message appears after 2 seconds
Count: 3
Count: 4
Count: 5
Interval Stopped
```

The exact timing and order of messages can vary slightly.

## Conclusion

This program demonstrates JavaScript timer functions. setTimeout() is used for delayed execution, while setInterval() is used for repeated execution. clearTimeout() and clearInterval() help cancel scheduled timer operations.