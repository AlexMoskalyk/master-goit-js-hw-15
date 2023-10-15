const counterValue = document.querySelector("#value");
let counter = 0;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const action = event.currentTarget.dataset.action;

    if (action === "increment") {
      counter += 1;
    } else if (action === "decrement") {
      counter -= 1;
    }

    counterValue.textContent = counter;
  });
});
