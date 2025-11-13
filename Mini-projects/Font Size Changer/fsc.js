const buttonEls = document.querySelectorAll(".btn-element");
const textEl = document.querySelector(".text-element");
const fontSizeEl = document.querySelector(".font-size-element");

let fontSize = 16;

buttonEls.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "increase") {
      fontSize++;
    } else if (action === "decrease") {
      fontSize--;
    } else if (action === "bold") {
      textBold();
    } else if (action === "italic") {
      textItalic();
    } else {
      fontSize = 16;
      textEl.style.fontWeight = "normal";
      textEl.style.fontStyle = "normal";
    }

    fontSizeEl.textContent = `Font Size: ${fontSize}px`;
    textEl.style.fontSize = fontSize + "px";
  });
});

function textBold() {
  textEl.style.fontWeight = "bold";
}

function textItalic() {
  textEl.style.fontStyle = "italic";
}
