
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');
const items = ingredients.map((ingredient) => {
const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li
});

ul.append(...items);

console.log("Number of categories: " + ingredients.length / 2);
console.log("\nCategory: Animals");
console.log("Elements: " + ingredients.slice(0, 4).length);
console.log("\nCategory: Products");
console.log("Elements: " + ingredients.slice(4, 7).length);
console.log("\nCategory: Technologies");
console.log("Elements: " + (ingredients.length - 4));

