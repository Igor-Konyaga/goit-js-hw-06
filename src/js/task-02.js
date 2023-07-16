const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.getElementById("ingredients");

const listEl = ingredients.map(ing => {
  const itemEl = document.createElement("li");
  itemEl.classList.add('item');
  itemEl.textContent = ing;
  return itemEl;
});

ingredientsEl.append(...listEl);

