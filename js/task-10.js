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

const INTIAL_BOX_SIZE = 30;
const BOX_SIZE_STEP = 10;

let boxSize = INTIAL_BOX_SIZE;

function createBoxes(amount) {
  let boxes = [];
  refs.numberInput.value = null;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${boxSize}px`;
    divEl.style.height = `${boxSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxSize += BOX_SIZE_STEP;
    boxes.push(divEl);
  }
  refs.boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxSize = INTIAL_BOX_SIZE;
  refs.boxesDiv.innerHTML = "";
}

// const INTIAL_BOX_SIZE = 30;
// const BOX_SIZE_STEP = 10;

// let boxSize = INTIAL_BOX_SIZE;

// function createBox(amount) {
//   for (let i = 1; i <= amount; i += 1) {
//     const box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color:${getRandomHexColor()};"></div>`;
//     ref.boxes.insertAdjacentHTML("beforeend", box);
//     boxSize += BOX_SIZE_STEP;
//   }
// }

// function resetBoxSize() {
//   boxSize = INTIAL_BOX_SIZE;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const ref = {
//   number: document.querySelector("input"),
//   btCreate: document.querySelector("[data-create]"),
//   btDestroy: document.querySelector("[data-destroy]"),
//   boxes: document.querySelector("#boxes"),
// };

// function createBox(amount) {
//   let boxSize = 30;
//   for (let i = 1; i <= amount; i += 1) {
//     const box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color:${getRandomHexColor()};"></div>`;
//     ref.boxes.insertAdjacentHTML("beforeend", box);
//     boxSize += 10;
//   }
// }

// function destroyBox() {
//   ref.boxes.innerHTML = "";
// }

// ref.btCreate.addEventListener("click", () => {
//   createBox(ref.number.value);
// });
// console.log();
// ref.btDestroy.addEventListener("click", () => {
//   destroyBox();
//   ref.number.value = "";
// });
