const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const enteredValue = validationInput.value;
  const requiredLength = Number(validationInput.getAttribute("data-length"));
  console.log(requiredLength);

  if (enteredValue.length === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
