function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle cases where either input is zero
  }
  return a / b; // Potential division by zero
}

console.log(myFunction(10, 0)); // Throws an error because of division by zero