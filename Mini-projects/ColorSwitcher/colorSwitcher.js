const buttons = document.querySelectorAll(".color-btn");
const resetBtnEl = document.querySelector(".reset-btn");

buttons.forEach((button) => {
  button.addEventListener("click", handleColorChange);
});

function handleColorChange(event) {
  const color = event.target.dataset.color;
  document.body.style.backgroundColor = color;
}

resetBtnEl.addEventListener("click", () => {
  document.body.style.backgroundColor = "";
});
