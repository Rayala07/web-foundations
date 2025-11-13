const counterElement = document.querySelector(".js-counter");
const incrementButtonElement = document.querySelector(".js-increment-btn");
const decrementButtonElement = document.querySelector(".js-decrement-btn");
const resetButtonElement = document.querySelector(".js-reset-btn");

let count = 0;

// Get the count from the local storage
if (localStorage.getItem("count")) {
    count = JSON.parse(localStorage.getItem("count"));
}

function saveToStorage() {
  localStorage.setItem("count", JSON.stringify(count));
}

// Take the counter value from the DOM and display it on the page
function render() {
  counterElement.textContent = count;
  // Disable the counter for good UX when count is 0
  decrementButtonElement.disabled = count === 0;

  if (count > 0) {
    counterElement.style.color = "green";
  } else {
    counterElement.style.color = "rgb(157, 184, 208)";
  }
}

render();

// Listen for click and perfrom increment by +1.
incrementButtonElement.addEventListener("click", () => {
  count++;
  saveToStorage();
  render();
});

// Listen for click and perfrom decrement by -1.
decrementButtonElement.addEventListener("click", () => {
  // Add a check if count is less than 0 than only decrement
  if (count > 0) {
    count--;
    saveToStorage();
    render();
  }
});

// Listen for click and perfrom reset to 0.
resetButtonElement.addEventListener("click", () => {
  count = 0;
  saveToStorage();
  render();
});
