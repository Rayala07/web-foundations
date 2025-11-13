const buttonEl = document.querySelector(".button-container");
const messageEl = document.querySelector(".selected-color-msg");

buttonEl.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const color = event.target.dataset.color;
    messageEl.textContent = `You selected ${color}`;
    messageEl.style.color = color;
  }
});

const cartItemsContainer = document.querySelector(".cart-items-container");

cartItemsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const item = event.target.parentElement;
    item.remove();
  }
});
