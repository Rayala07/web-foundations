const titleEl = document.querySelector(".theme-title");
const toggleBtnEl = document.querySelector(".toggle-btn");

let isDarkMode = false;

toggleBtnEl.addEventListener("click", () => {
  renderTheme();
});

function renderTheme() {
  if (!isDarkMode) {
    toggleBtnEl.textContent = "Light Mode ☀️";
    titleEl.textContent = "Dark MODE";
    titleEl.style.color = "aliceblue";
    document.body.style.backgroundColor = "rgb(77, 77, 77)";
    isDarkMode = !isDarkMode;
  } else {
    defaultTheme();
  }
}

function defaultTheme() {
  toggleBtnEl.textContent = "Dark Mode 🌝";
  document.body.style.backgroundColor = "rgb(168, 146, 117)";
  titleEl.textContent = "Light MODE";
  titleEl.style.color = "black";
  isDarkMode = !isDarkMode;
}
