// menu toggle
const selectElement = (el) => {
  return document.querySelector(el);
};

const body = selectElement("body");
const hamburgerMenu = selectElement(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  body.classList.toggle("is-open");
});

//click body/link to close menu
document.addEventListener("click", (e) => {
  if (hamburgerMenu.contains(e.target)) return;
  body.classList.remove("is-open");
});
