// Even and Odd sum
function sumEvenOdd(numbers) {
    let evenSum = 0; // Initialize sum for even numbers
    let oddSum = 0;  // Initialize sum for odd numbers
  
    // Iterate through the array
    for (let num of numbers) {
      if (num % 2 === 0) {
        evenSum += num; // Add to even sum if the number is even
      } else {
        oddSum += num;  // Add to odd sum if the number is odd
      }
    }
  
    return [evenSum, oddSum]; // Return the sums as an array
  }
  
  // Test case
  console.log(sumEvenOdd([1, 2, 3, 4, 5])); // Expected output: [6, 9]

  

// Temperature converter
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  

  function celsiusToFahrenheit(celsius) {
    return (celsius * (9 / 5)) + 32;
  }
  
  console.log(fahrenheitToCelsius(32));  // Expected output: 0
  console.log(celsiusToFahrenheit(0));   // Expected output: 32


// Reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("JavaScript"));  // Expected output: "tpircSavaJ"


//Calculate average and median
  function averageAndMedian(numbers) {
    let average = 0;
    let median = 0;
    
    if (numbers.length === 0) return { average, median }; // Handle empty array
    
    // Calculate average
    average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
  
    // Calculate median
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 0) {
      median = (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      median = sorted[mid];
    }
  
    return { average, median };
  }
  
  console.log(averageAndMedian([10, 20, 30, 40, 50]));  // Expected output: { average: 30, median: 30 }


//Count vowel in string
  function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  console.log(countVowels("JavaScript is fun"));  // Expected output: 5
  
  
  
  
  