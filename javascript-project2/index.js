const products = [
  "hot choco",
  "hot tea",
  "Cold soda",
  "cold tea",
  "spicy noodle",
  "spicy fried rice"
];

console.log(products);

for (let i = 0; i < products.length; i++) {
  document.writeln(products[i]);
  document.write("<br>");
}

const identifyFood = products.filter(function(food) {
  return food.toLocaleLowerCase().includes("spicy".toLocaleLowerCase());
});
console.log(identifyFood);

const identifyDrink = products.filter(function(drink) {
  if (
    drink.toLocaleLowerCase().includes("hot".toLocaleLowerCase()) ||
    drink.toLocaleLowerCase().includes("cold".toLocaleLowerCase())
  ) {
    return drink;
  }
});
console.log(identifyDrink);

const identifyMenu = products.map((menu, i) => {
  if (menu.includes("spicy")) console.log(`${i + 1}. ${menu} (food)`);
  else if (menu.includes("hot")) console.log(`${i + 1}. ${menu} (drink)`);
  else console.log(`${i + 1}. ${menu} (drink)`);
});


