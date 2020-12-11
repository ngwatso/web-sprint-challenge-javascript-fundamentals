// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction is within myFunction; functions are able to reach outward to access variables, but they cannot reach inward.  myFunction would not be able to access a variable within nestedFunction.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {

  let summ = 0;
  for (let i = 1; i <= num; i++) {
    summ += i;
    }
  return summ;
  }
  
  console.log(summation(4));