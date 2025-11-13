const buttonEl = document.querySelectorAll(".reaction-btn");
const reactions = {
  like: 0,
  love: 0,
  laugh: 0,
  wow: 0,
  sad: 0,
};

buttonEl.forEach((button) => {
  button.addEventListener("click", () => {
    const reaction = button.dataset.reaction;
    reactions[reaction]++;
    button.querySelector("span").textContent = reactions[reaction];
  });
});