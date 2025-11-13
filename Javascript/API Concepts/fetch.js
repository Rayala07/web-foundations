// Fetch is the modern and clean and readable way to make HTTP request and fetch data from the backend and display it in the browser

/* Fetch returns a promise
 fetch() uses GET method by default
 pass .json() at the end to get the data in json format
*/
fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Fetching all the posts with the titles

const titleContainer = document.querySelector(".js-titles-container");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post) => {
      const getTitle = post.title;
      const titleElement = document.createElement("p");
      titleElement.textContent = getTitle;
      titleContainer.appendChild(titleElement);
      console.log(getTitle);
    });
  })
  .catch((err) => console.log(err));