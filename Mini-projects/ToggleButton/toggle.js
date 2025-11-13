const toggleBtnEl = document.querySelector(".toggle-btn");

let notLiked = true;

toggleBtnEl.addEventListener("click", () => {
  if (notLiked) {
    toggleBtnEl.innerHTML = "Liked 💚";
    notLiked = false;
  } else {
    toggleBtnEl.innerHTML = "Like ❤️";
    notLiked = true;
  }
});
