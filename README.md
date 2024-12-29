# Silent Division by Zero in JavaScript

This repository demonstrates a common yet subtle error in JavaScript: silent division by zero.  When dividing by zero in JavaScript, instead of throwing an error, it returns `Infinity`. This can be problematic because it doesn't immediately halt execution and may lead to unexpected results further down the line, making debugging difficult.

The `bug.js` file contains the problematic code, and `bugSolution.js` provides a solution to handle the scenario gracefully.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using a JavaScript runtime (like Node.js).
3. Observe the output; it will return `Infinity` instead of a clear error message.

## Solution

The `bugSolution.js` file demonstrates how to handle potential division by zero by explicitly checking for it before the division.