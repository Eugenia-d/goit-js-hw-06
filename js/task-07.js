const sliderEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
textEl.style.fontSize = `${sliderEl.value}px`;

sliderEl.addEventListener("input", (event) => {
  const size = event.currentTarget.value;
  textEl.style.fontSize = `${size}px`;
});
