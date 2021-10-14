function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color");

colorEl.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  console.log(newColor);
  document.body.style.backgroundColor = newColor;
  colorSpanEl.textContent = newColor;
});
