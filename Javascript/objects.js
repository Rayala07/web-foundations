/*const product = {
  name: "socks", //property: value
  price: 1090,
};

console.log(product);
console.log(product.price)

//To change the value of a property
product.price = 2000;
console.log(product.price)

//You can also add new property from outside and delete too !!
product.color = 'blue';
console.log(product)

delete product.color;
console.log(product)
*/

/*We cannot access the property with - (special char) in it , js understands it as - operation so in these cases we need to use the bracket notation['']

//Nested object - You can aslo create an object inside an object

//Function can also be a property of an object - example of a function inside an object is - console.log() , Math.random() these are all functions on an object [console and Math]
//Obect+Function is called a Method
const product2 = {
  name: "shirt",
  ["delivery-date"]: "2022-11-30",
  rating: {
    stars: 4.5,
    count: 87,
  },

  printFunc: function print() {
    console.log("This is a function of product2_object");
  },
};

// console.log(product2.name);
// console.log(product2["delivery-date"]);
// console.log(product2.rating.count);
product2.printFunc();
*/

/* Built-in Objects in JavaScript - 
JSON and LocalStorage*/

/*JSON - JavaScript Object Notation
1. Similar to JS Object Syntax 
2. Less features , property and values both must be defined in "" strings , functions are not allowed
3. It is a stringified version of JS Object
4. Universally understood
5. To store data */

const product3 = {
  name: "Sweater",
  price: 1000,
  color: "black",
  size: "M",
  rating: {
    stars: 4.2,
    reviewCount: 122,
  },
};

// console.log(JSON.stringify(product3)); //Now can be used as data for other programming languages and purposes

// const jsonString = JSON.stringify(product3);

// console.log(JSON.parse(jsonString)); //Helps convert JSON to JS Object

/* Localstorage - Stores data locally because when you store data in the vairable it is stored temorarily and when you refresh the page it is set again to its default values , to tackle that we use Localstorage
1. localeStorage.setItem(key, value)
2. localStorage.getItem(key ,value)

Localstorage only supports strings so when you put objects into localStorage you need to convert them into JSON type -> setItem(key, JSON.stringify(object))

Then when you do getItem(key) you need to convert it back to JS Object -> JSON.parse(localStorage.getItem(key))
*/

/* Auto Boxing means when you decalre a direct literal value it is converted to a JS Special Object in which you can apply methods upon it  */

// console.log("hello".length); // 'hello' is autoboxed and converted to a string object and now it has a length property , so you can use properties of other data types like numbers and all !!

//Objects are referenced types
/* So you can assign const but change the value of the object but you cannot reassign the object
Means you cannot assign a new object to the variable with const already pointing towards an object{} but You can still modify properties of the existing object.*/

const product4 = {
  name: "Pants",
};

product4.name = "Jeans";
// console.log(product4.name); //See here the value has changed

/* but if you try to reassign the object then it will throw an error
product4 = {
productName: "Jeans"
}
*/

// Destructuring - easier way to take properties out of an object , its a shortcut we will understand why is it used at next section
const object5 = {
  message: "Good Morning",
  time: "10:00 AM",
};

const { message, time } = object5;

// console.log(message);
// console.log(time);

// Short-hand way
const object6 = {
  message, // this means object6's message: object5.message and we can access it because we used destructuring in object5
};

// console.log(object6)

//Short-hand method
const object7 = {
  printTime() {
    console.log(time); // this time is calling the time property of object5 and no need to write function and all directly give the function name and create it and call it.
  },
};

object7.printTime();
