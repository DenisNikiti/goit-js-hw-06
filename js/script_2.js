  const ingredientsListEl = document.querySelector("#ingredients")
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = []
 
for (const ingredient of ingredients) {
    const ingredientEl = document.createElement("li")
    ingredientEl.textContent = ingredient
    ingredientEl.classList.add("item")
   ingredientsEl.push(ingredientEl)
}



ingredientsListEl.append(...ingredientsEl)

