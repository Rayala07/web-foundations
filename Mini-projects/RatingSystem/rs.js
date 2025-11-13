const buttonEls = document.querySelectorAll(".rating-btn");
const ratingTextEl = document.querySelector(".selected-rating");

buttonEls.forEach((button) => {
  button.addEventListener("click", () => {
    const ratingCount = parseInt(button.dataset.rating, 10);
    console.log(ratingCount);
    ratingTextEl.innerHTML = `Your Rating: <span class="rating-count">${ratingCount}</span>`;
    document.querySelector(".rating-count").style.color =
      ratingCount >= 2 ? "green" : "#000";
  });
});
