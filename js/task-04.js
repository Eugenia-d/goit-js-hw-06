const counterEl = document.getElementById("counter");

const valueEl = document.getElementById("value");

let counterValue = 0;

counter.firstElementChild.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);

  valueEl.textContent = counterValue;
});

counter.lastElementChild.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);

  valueEl.textContent = counterValue;
});
