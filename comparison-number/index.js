var num1 = 40;
var num2 = 20;
if (num1 > num2) {
  console.log("Amazing! You're right. num1 larger than num2");
} else if (num2 > num1) {
  console.log("It's bad. You're wrong. Num2 smaller than num1");
} else {
  console.log("You're doing a great job!");
}

grade = 50;
if (grade >= 80 && grade >= 90) {
  console.log("Brilliant student");
} else {
  console.log("Average student");
}

var num1 = 40;
var num2 = 20;
var result = num1 > num2
  ? "Amazing! You're right. num1 larger than num2"
  : num2 > num1
  ? "It's bad. You're wrong. Num2 smaller than num1"
  : "You're doing a great job!";
alert(result);

function myShop(price, product = 10) {
  let income = price * product;
  
  if (income > 0) {
    return income 
  }
  return income;
}
console.log(myshop);