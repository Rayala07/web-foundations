const person = {
  name: "Rayala",
  age: 22,
  city: "Adra",
};

// person.age = 30;
// person.country = "India";

// console.log(person)

// delete person.city
// console.log(person)

const movie = {
  ["movie-title"]: "Pushpa 2",
  ["director"]: "Sukumar",
  ["year"]: 2024,
};
movie["actor"] = "Allu Arjun";

// console.log(movie);

const student = {
  name: "Lucky",
  contact: "9933768499",
  address: {
    House: "DS/285/C",
    Street: "Church Road",
    City: "Adra",
    State: "West Bengal",
    Pin: 723121,
  },
};

// console.log(student.address.House)

const calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },
};

// console.log(calculator.add(10,20))
// console.log(calculator.subtract(10,2))

const movie_data = {
  title: "Coolie",
  director: "Lokesh Kanagaraj",
  lead: "Rajnikanth",
  ["release-data"]: "14-07-2025",
  rating: {
    stars: 4.1,
    ["rating-count"]: "5000",
  },
};

const convertToJSON = JSON.stringify(movie_data);

// console.log(convertToJSON);

const convertToJs = JSON.parse(convertToJSON);

// console.log(convertToJs);

// console.log(convertToJs.rating['rating-count'])