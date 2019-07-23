// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function Door1(){
  function Door2(){
    var secret = "There is no secret";
    console.log(secret);
  }
  Door2();
}
Door1();





/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  count = 0;
  return () => count++;  
  // Return a function that when invoked increments and returns a counter variable.
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());





// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  var counter = 100;

  const procedure = {
  
    increment: function(){
      return counter++;
    },

    decrement: function(){
      return counter--;
    },
  }
  return procedure;
};

var testNum = counterFactory();
console.log(testNum.increment());
console.log(testNum.increment());
console.log(testNum.increment());
console.log(testNum.decrement());
console.log(testNum.decrement());
console.log(testNum.decrement());
console.log(testNum.decrement());
