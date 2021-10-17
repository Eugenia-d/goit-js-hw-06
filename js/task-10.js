function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  numberInput: document.querySelector("input[type=number]"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxesDiv: document.getElementById("boxes"),
};
console.log(refs.numberInput);
console.log(refs.buttonCreate);
console.log(refs.buttonDestroy);

refs.buttonCreate.addEventListener("click", () => {
  createBoxes(refs.numberInput.value);
});

refs.buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  let boxes = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${boxSize}px`;
    divEl.style.height = `${boxSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxes.push(divEl);
  }
  refs.boxesDiv.append(...boxes);
}

function destroyBoxes() {
  refs.boxesDiv.innerHTML = "";
}
