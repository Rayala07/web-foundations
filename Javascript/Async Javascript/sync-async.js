/* Difference Between Sync and Async ?
- Sync Programming in js is the one which executes line by line and waits for the current line to execute before going to the next line and this is mainly how js works by default

- Async Programming is in which the code will execute line by line but it will not wait until the current line complete it will go to complete other lines and then when the previous lines finish their work they return the result , it is like doing multiple tasks at the same time without waiting for one long task to complete and then only going to the next one which happens in the sync code.
*/

/* 

MainStack and SideStack 

- The sync code is executed on the main stack and the async is executed behind the scenes on the sidestack and when the sync-code in the Main stack is executed and erased then the event-loop will go and check in the side-stack whether the function is complete or not and if it is. Then the result of that function is kept in the main-stack and returned as the sync-code is executed.

Event-loop is the thing which simultaneously keeps track of the sync and async code.
*/

// console.log("Line 1");
// console.log("Line 2");
// setTimeout(() => {
//   console.log("Line 3");
// }, 0);
// console.log("Line 4");

// Above the code will print Line 1, Line 2, Line 4, Line 3
/* 

Line 1 - sync 
Line 2 - sync 
Line 3 - while executing time is 0s still it is kept in the side-stack as it is aysnc code
Line 4 - sync

OUTPUT

Line 1 => main-stack
Line 2 => main-stack
Line 4 => main-stack
 - after all these lines are executed and removed from the main-stack, the event loop then asks the side-stack if the async code is executed or not it says "Yes, i am done" then it returns the result to the main-stack and prints the result 
Line 3 => side-stack to main-stack

*/

/*

methods in which you write async code are -
These are used to send requests,
fetch
axios
promises
setTimeout
setInterval

When requests are completed then how to handle them ? Callbacks
then-catch
async-await

*/

/* 

CALLBACK is bascially a function only but it executes only after the async code is completed.

setTimeout(function(), 10000);

Here,
setTimeout(,10000) - is async code
function() is the callback
 
*/

/* 

PROMISES - 

A promise is a object that is saved in a variable, a promise can be in 3 states -
pending
resolve
reject

When the promise is resolves then it is passed to .then() method
if, the promise is rejected then it is passed to .catch() method 
This helps in handling errors in async code

*/

let ans = new Promise((res, rej) => {
  if(true) {
    return res();
  } else {
    return rej();
  }
})

ans.then(() => {
  console.log("Success")
}).catch(() => {
  console.log("Error")
})

/*

Promise Chaining - When you want to use the result of one promise in the next promise then you can use promise chaining and also this method is used when you want tasks to happen one after the other only.

p1 -> p2 -> p3 ... 

Use the result of one promise in the next promise, using .then()
 
*/

// let ans = new Promise((res, rej) => {
//   return res("Come Home");
// });

// let ans2 = ans.then((result) => {
//   console.log(result);
//   return new Promise((res, rej) => {
//     return res("Open Gate to enter inside");
//   });
// });

// let ans3 = ans2.then((result) => {
//   console.log(result);
//   return new Promise((res, rej) => {
//     return res("Go inside and sleep...");
//   });
// });

// let ans4 = ans3.then((result) => {
//   console.log(result);
// });

/* 

Async-Await
 Used in place of .then() and .catch() , to decrease the lines of code and better readability.

*/

// In the function where we use await, the function should be named as aync function ->
async function callData() {
  // We are calling a api request from 3rd party it can any amount of time so we should tell the code to wait for it to complete so we write await
  let rawData = await fetch("https://randomuser.me/api/");
  // We are using await here also because it should wait for the api request to complete and then convert it to json
  let ans = await rawData.json();
  // Then we can read/see the data
  console.log(ans);
}

// Call the function now
callData();

/* 

Important Concepts -

1. Concurrency : The process of execution of sync and async code together in SS and MS simultaneously is the concept of concurrency.

2. Parallelism : Focuses on different processors and their cores on how to execute the code in parallel.

3. Throttling : This concept is used to control the number of executions of the code in a particular time frame.

*/
