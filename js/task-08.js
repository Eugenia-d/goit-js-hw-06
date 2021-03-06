const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("Все поля должны быть заполнены");
    return;
  }
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(value);
    console.log(name);
  });

  console.log(Object.fromEntries(formData));
  formEl.reset();
});
