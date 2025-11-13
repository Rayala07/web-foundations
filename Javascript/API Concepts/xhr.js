// In older days devs used to use XMLHttpRequest() to make HTTP request and fetch data from the backend and display it in the browser

// This is somewhat how data call were made in the older days , and this is not used anymore !
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://randomuser.me/api/");
xhr.send();
