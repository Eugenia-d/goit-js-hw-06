const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", (event) => {
  const quantity = event.currentTarget.value.length;
  console.log(quantity);
  if (quantity === Number.parseInt(inputEl.dataset.length)) {
    inputEl.classList.remove(`invalid`);
    inputEl.classList.add(`valid`);
  } else {
    inputEl.classList.remove(`valid`);
    inputEl.classList.add(`invalid`);
  }
});
