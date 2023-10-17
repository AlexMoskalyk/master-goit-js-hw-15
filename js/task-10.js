function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const mainElement = document.querySelector("#controls");
const boxesContainer = document.querySelector("#boxes");

mainElement.addEventListener("click", handleClick);

function handleClick(e) {
  const inputValue = +document.querySelector("input").value;

  if (e.target === createButton) {
    return createBoxes(inputValue);
  }

  if (e.target === destroyButton) {
    return destroyBoxes();
  }

  return;
}

function createBoxes(amount) {
  const initialSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${initialSize + i * 10}px`;
    div.style.height = `${initialSize + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
