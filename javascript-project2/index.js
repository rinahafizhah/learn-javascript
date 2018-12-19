const products = [
  "hot choco",
  "hot tea",
  "Cold soda",
  "cold tea",
  "spicy noodle",
  "spicy fried rice"
];

console.log(products);

//Level 0
for (let i = 0; i < products.length; i++) {
  document.writeln(products[i]);
  document.write("<br>");
}

//Level 1
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

//Level 2
const identifyMenu = products.map((menu, i) => {
  if (menu.includes("spicy")) console.log(`${i + 1}. ${menu} (food)`);
  else if (menu.includes("hot")) console.log(`${i + 1}. ${menu} (drink)`);
  else console.log(`${i + 1}. ${menu} (drink)`);
});

//Level 3

const searchMenu = products.filter(m => m.includes("noodle"));
console.log(searchMenu);

//Level 4
const menu1 = ["hot choco", "hot tea", "Cold soda"];
const menu2 = ["cold tea", "spicy noodle", "spicy fried rice"];
console.log(menu1.concat(menu2));

//Level 5
const menu_resto = [
    "hot choco",
    null,
    undefined,
    "hot tea",
    10,
    "Cold soda",
    "cold tea",
    7,
    9,
    "spicy noodle",
    "spicy fried rice"
]