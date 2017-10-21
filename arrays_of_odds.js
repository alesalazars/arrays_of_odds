/* ====== ARRAYS MADE FROM ODD NUMBERS ======*/

// I declare the variable "n", this will determine how many odd numbers I want in my array
var n = 7;
// This array will contain de "n" first odd numbers the for loop finds in a list
var oddarray = [];
// In this exercise I want to print an array that contains the result array 3 times
var arrayx3 = [oddarray , oddarray , oddarray];

// As long as "i" is smaller than the result of "n" multiplied by 2
for ( i = 0 ; i <= n * 2 ; i++ ) {
  // If "i" is an odd number
  if ( i % 2 !== 0 ){
    // Fill the array with said number
    oddarray.push(i);
    // When the length of the new array reaches the value of "n", the for loop stops iterating
    if ( oddarray.length == n ){;
      break;
    }
  }
}

// Show in the console the array that contains the result repeated 3 times
console.log(arrayx3);
