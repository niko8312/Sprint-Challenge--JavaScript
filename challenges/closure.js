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

// Explanation:  if a function cannot find a variable, it will look outside of it's scope to find the variable to run the function


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
const sumArray = []

function sumation (num){
  for (i = 0; i <= num; i++){
    sumArray.push(i + 1);
  }
    const sum = sumArray.reduce(function(a, b){
      return a + b;
  }, 0);
  return sum;
}