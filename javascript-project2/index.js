const products = [
  "hot choco",
  "hot tea",
  "Cold soda",
  "cold tea",
  "spicy noodle",
  "Spicy fried rice"
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

const identifyHotDrink = products.filter(function(drink) {
  return drink.toLocaleLowerCase().includes("hot".toLocaleLowerCase());
  
});
console.log(identifyHotDrink);

const identifyColdDrink = products.filter(function (drink) {
    return drink.toLocaleLowerCase().includes("cold".toLocaleLowerCase());

});
console.log(identifyColdDrink);

const menuIdentify = products.map(menu + "names")
