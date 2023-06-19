const [open_btn, close_btn] = document.querySelectorAll(".circle-container button");
const circle_container = document.querySelector(".circle-container");
const container = document.querySelector(".container");
const nav = document.querySelector("#mynav")

open_btn.addEventListener("click", () => {
  circle_container.classList.add("rotated");
  container.classList.add("rotated");
  nav.classList.add("rotated");
});

close_btn.addEventListener("click", () => {
  circle_container.classList.remove("rotated");
  container.classList.remove("rotated");
  nav.classList.remove("rotated");
});
