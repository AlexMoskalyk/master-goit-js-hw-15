const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createMarkup(arr) {
  const ul = document.querySelector("#ingredients");

  const markUp = arr.map((item) => {
    const li = document.createElement("li");

    li.textContent = item;
    li.classList.add("item");

    ul.append(li);
  });
}

createMarkup(ingredients);
