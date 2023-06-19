const [open_btn, close_btn] = document.querySelectorAll(".circle-container button")
const circle_container = document.querySelector(".circle-container");

open_btn.addEventListener("click", () => {
  circle_container.classList.add("rotated");
})

close_btn.addEventListener("click", () => {
  circle_container.classList.remove("rotated");
})