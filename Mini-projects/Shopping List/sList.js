const itemInputEl = document.querySelector(".js-item-input");
const addBtnEl = document.querySelector(".js-add-item-btn");
const itemsListContainer = document.querySelector(".js-items-list-container");

let itemsHTML = "";

addBtnEl.addEventListener("click", () => {
  const getItemValue = itemInputEl.value;
  itemsHTML = `
    <div>
        <p>${getItemValue}</p>
        <button class="mark-btn" >✅</button>
        <button class="remove-btn" >❌</button>
    </div>
  `;

  itemsListContainer.innerHTML += itemsHTML;
  itemInputEl.value = "";
});

itemsListContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("mark-btn")) {
    event.target.previousElementSibling.style.textDecoration = "line-through";
    console.log("MARKED");
  } else if (event.target.classList.contains("remove-btn")) {
    event.target.parentElement.remove();
  }
});
