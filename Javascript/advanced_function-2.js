// 7. setTimeout() function
/* Accepts two values a function and time delay i.e how long to wait before calling the function, setTimeout(func, time) 
time is written in milliseconds, 1000 milliseconds = 1 secons
*/


setTimeout(function () {
  console.log("timeout");
}, 2000);

console.log("next line");


// Above first 'next-line' will print then timeout will print after 2 seconds, so the order will be next line then timeout. This happens because of the concept of asynchronous code

/* Async Code - In this the code executes line by line but doesnot wait for the function to complete if timer is there it will set the timer and then execute the next line, which happens in the above code
WHEREAS
Sync Code - In this the code executes line by line and will wait for the current line to execute before going to the next line.

Everytime js will run in sync mode by default but for certain features of js, such as setTimeout() it will run in async mode.
Advantage of async mode is that it doesnot block the execution for 2 seconds as written in the above example , it just sets the timer and continues with the next line execution.
*/

// 8. setInterval() function
// Accepts two values similar as setTimeout() but catch is whatever the time delay you provide it will keep calling the function after every X seconds until you stop it, its also an async code

let intervalId;
intervalId = setInterval(function () {
  console.log("Running every 2 seconds");
}, 2000);


console.log("Next work");

// clearInterval() function is used to stop the setInterval()
// When calling clearInterval() you need to pass the intervalId variable which is returned by setInterval() and pass it in it to stop it.

 clearInterval(intervalId); // This will stop the interval

// 9. .forEach() loop method to iterate in the array it is a preferred and an optimal way to iterate in the array in place of the traditional for loop we learnt


["Anaballe", "Conjuring", "The Conjuring 2"].forEach(function (index, movie) {
  console.log(index);
  console.log(movie);
});


/* The forEach() method calls a function(with each movie name as a parameter) and inside the function you print the movie */

const add = function (a, b) {
  console.log(a + b);
};

// add(2, 3);
// add(3, 4);

function runTwice(add) {
  add(2, 3);
  add(2, 6);
  add(3, 4);
}

runTwice(add);