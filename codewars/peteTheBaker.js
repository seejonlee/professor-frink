/**
 * Pete likes to bake some cakes. He has some recipes and ingredients.
 * Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
 * Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
 * and returns the maximum number of cakes Pete can bake (integer). 
 * For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
 * Ingredients that are not present in the objects, can be considered as 0.
 * 
 * Examples:
 * returns 2
 * cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
 * 
 * returns 0
 * cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
 * 
 * https://www.codewars.com/kata/pete-the-baker/javascript
 */

function cakes(recipe, ingredients) {
  let qty = [];
  for (key in recipe) {
    if (!ingredients.hasOwnProperty(key)) {
      return 0;
    } else {
      qty.push(Math.floor(ingredients[key] / recipe[key]));
    }
  }
  let numOfCakes = Math.min(...qty);
  return (numOfCakes > 0 ? numOfCakes : 0);
}

/**
 * Top solution from Codewars
 */
function cakes2(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}

console.log(cakes2({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes2({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
