/* Filename: ComplexCode.js */

// This complex code calculates the nth Fibonacci number using dynamic programming approach

function fibonacci(n) {
  // Initialize an array to store calculated Fibonacci numbers
  const fibArray = new Array(n + 1).fill(0);

  // Base cases
  fibArray[0] = 0;
  fibArray[1] = 1;

  // Calculate Fibonacci numbers iteratively
  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray[n];
}

// Test the function with different inputs
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(15)); // Output: 610

// In addition to Fibonacci number calculation, this complex code also includes a recursive factorial function

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040
console.log(factorial(10)); // Output: 362880

// This complex code further incorporates a bubble sort implementation for sorting an array

function bubbleSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const numbers = [9, 2, 5, 1, 7, 3];
console.log(bubbleSort(numbers)); // Output: [1, 2, 3, 5, 7, 9]

// Apart from the above functionalities, this complex code also implements a binary search algorithm

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Not found
}

const sortedNumbers = [1, 3, 5, 7, 9];
console.log(binarySearch(sortedNumbers, 5)); // Output: 2
console.log(binarySearch(sortedNumbers, 8)); // Output: -1
console.log(binarySearch(sortedNumbers, 1)); // Output: 0

// This complex code also includes a prime number checker

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(17)); // Output: true
console.log(isPrime(16)); // Output: false
console.log(isPrime(29)); // Output: true

// Additional advanced functionalities can be added to further make this complex code sophisticated and elaborate