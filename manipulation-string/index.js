var food1 = "I love pizza!";
var food2 = "I prefer spaghetti";
var food3 = "lasagna, not bad";
var len1 = food1.length;
var len2 = food2.length;
var len3 = food3.length;
var concat_str = food1.concat(" ", food2, " ", food3);
const combine_str = `${food1} ${food2}`;
var food1_uppercase = food1.toUpperCase();
var food2_lowercase = food2.toLowerCase();
var word_split = food3.split("");

function titleCase(food1) {
  return food1
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(food1);
console.log(food2);
console.log(food3);
console.log("Length of string food1 : " + len1);
console.log("Length of string food2 : " + len2);
console.log("Length of string food3 : " + len3);
console.log("This is concatination : " + concat_str);
console.log("Let's combine this word! : " + combine_str);
console.log("Uppercase this word! : " + food1_uppercase);
console.log("Lowercase this word! : " + food2_lowercase);
console.log("Let's split this word :) " + word_split);
console.log(titleCase(food1));
