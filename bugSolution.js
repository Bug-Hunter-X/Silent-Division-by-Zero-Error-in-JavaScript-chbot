function myFunction(a, b) {
  if (b === 0) {
    return "Division by zero!"; // Or throw an error: throw new Error('Division by zero');
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Returns "Division by zero!"
console.log(myFunction(10, 2)); // Returns 5
console.log(myFunction(0,2)); // Returns 0