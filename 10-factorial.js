    function factorial(n) {
  // Convert input to integer
  n = parseInt(n);

  // If n is not a number or less than 0, return 1
  if (isNaN(n) || n < 0) {
      return 1;
  }

  // Base case
  if (n === 0 || n === 1) {
      return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Get the first argument from command line
const input = process.argv[2];

// Compute factorial and print result
console.log(factorial(input));
