// Array is a special type of object that is used to store multiple values in a single variable, so being an object array has it properties and methods.
const myArray = [10, 20, 30];

console.log(typeof myArray); //Object

console.log(myArray.length); //3

myArray.push(40); //push adds an element at the end of the array
console.log(myArray); // [10, 20, 30, 40]

myArray.pop(); //pop removes an element from the end of the array
console.log(myArray); // [10, 20, 30]

myArray.splice(1, 1); //splice removes an element at a specific index
console.log(myArray); // [10, 30]

// .value is used in input fields to get the value of the input field in the javascript
// inputElement.value - if user enters "Rayala" then the value will be "Rayala" will be stored in the variable userName in js.

// 2. Loops
// There are two types of loops in javascript - for loop and while loop

// Looping through an array
const todoList = ["make dinner", "wash dishes", "watch youtube"];

let todoHTML = "";

for (let i = 0; i < todoList.length; i++) {
  const html = `<p>${todoList[i]}</p>`; // While looping you can also   generate html and so that you can add it to the dom and display it int the browser
  todoHTML += html;
}

console.log(todoHTML); //HTML paragraph elements will be generated which you can then add to the dom and display them in the browser

// Array Destucturing -
const array1 = [1, 2, 3];

const array2 = array1; // Array is also a reference type like object

console.log(array2);

array2.push(4);
console.log(array1); // Changes will be applied on array1 also

const [firstValue, secondValue, thirdValue] = array1; // Array destructure

console.log(firstValue);
