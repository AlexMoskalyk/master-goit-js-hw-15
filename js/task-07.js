const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const initialValueOfText = Number(fontSizeControl.getAttribute("min"));

text.style.fontSize = `${initialValueOfText}px`;

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});
