const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const dataObject = {};

  formData.forEach((value, key) => {
    dataObject[key] = value;
  });

  if (dataObject.email === "" || dataObject.password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(dataObject);
    form.reset();
  }
});
