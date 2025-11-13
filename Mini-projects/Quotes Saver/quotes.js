const quoteInput = document.querySelector(".js-quotes-input");
const saveBtn = document.querySelector(".js-save-btn");
const savedContainer = document.querySelector(".saved-quotes-container");

let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

function saveToStorage() {
  localStorage.setItem("quotes", JSON.stringify(savedQuotes));
}

saveBtn.addEventListener("click", () => {
  const getQuote = quoteInput.value;
  // create a div to generate and append the quote in the UI
  const createDiv = document.createElement("div");
  createDiv.innerHTML = `
  <p>${getQuote}</p>
  <button class="js-remove-btn">Remove</button>
  `;
  savedContainer.appendChild(createDiv);

  savedQuotes.push(getQuote);
  saveToStorage();
  quoteInput.value = "";
});

savedContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
  saveToStorage();
});
