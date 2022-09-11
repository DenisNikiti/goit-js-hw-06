function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ColorTextEl = document.querySelector(".color")
const buttonColorEl = document.querySelector(".change-color")
   
buttonColorEl.addEventListener("click", () =>{ document.body.style.backgroundColor = getRandomHexColor(), ColorTextEl.textContent = document.body.style.backgroundColor })