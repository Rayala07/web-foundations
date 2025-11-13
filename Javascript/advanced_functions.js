// 1. Calling a function
function greeting() {
  console.log("Hello RV");
}

// greeting();

// 2. Functions are also values , so we can save a func() inside a variable
// So you can directly call the variable name to call the function
// Functions has a typeof - function

const func1 = function printName() {
  console.log("Rayala Don");
};

func1();

// 2.1 As we can directly call the function by its var_name so need to define a function name we can write the function like -
const printDay = function () {
  console.log("Today is Friday");
};

printDay();

// 3. But writing a function like (1.) is advantageous because it support hoisting which means after defining the function you can call it even before defining it in the script which you cannot do if you define a function in a variable
printDate(); // Called first

// Defined later
function printDate() {
  console.log("Date: 15/08/2025");
}

// 4. As a function is a value you can also define it in an object, in this you can use the anonymous function as a property because it is a value of the key
const object1 = {
  fun: function () {
    console.log("You called an anonymus function");
  },
};

object1.fun();

// 5. Parameterized Function
function printNum(num) {
  console.log(num);
}
printNum(25);

// 6. As function itself is a value so you can pass a function as a parameter to another function
// Also called as a callback !!
function run(func_2) {
  func_2();
}

// Whats happeing below is like this -
/* 
func_2 = function () {
  console.log("You called this function from func_2 parameter variable");
  }
*/

run(function () {
  console.log("You called this function from func_2 parameter variable");
});

/* 

┌──────────────────┐
│ Box: run (Executing)│
│                  │
│ Contains: [func_2] │
│      │           │
│      └─► ┌──────────────────────────────────────────────┐
│          │ Unnamed Box                                  │
│          │                                              │
│          │ Instructions:                                │
│          │  - console.log("You called this function..."); │
│          └──────────────────────────────────────────────┘
│                  │
│ Instructions:    │
│   - Execute func_2() │  <-- This is about to happen!
└──────────────────┘

*/


