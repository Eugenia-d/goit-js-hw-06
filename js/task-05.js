const nameInputEl = document.getElementById("name-input");

const nameOutputEl = document.getElementById("name-output");

nameInputEl.addEventListener("input", (event) => {
  nameOutputEl.textContent = event.currentTarget.value;

  if (nameOutputEl.textContent.length === 0) {
    nameOutputEl.textContent = "Anonymous";
  }
});
