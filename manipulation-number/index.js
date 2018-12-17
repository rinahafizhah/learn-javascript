var x = 10; //integer
var y = 0.1; //float
const pi = 3.14;
console.log("x adalah integer dengan nilai sebesar" + " " + x);
console.log("y adalah float dengan nilai sebesar" + " " + y);
console.log("pi adalah konstansta pi dengan nilai sebesar" + " " + pi);

var num1 = 250;
var num2 = 10;
var num3 = 5;
var total_add = num1 + num2 + num3;
var total_min = num1 - num2;
var total_multiple = num2 * num3;
var total_divide = num1 / num3;
var total_mod = num2 % num3;
console.log("Addition : " + total_add);
console.log("Substaction : " + total_min);
console.log("Multiplication : " + total_multiple);
console.log("Division : " + total_divide);
console.log("Modulation : " + total_mod);

var college = "Gunadarma";
var degree = "bachelor";
console.log(
  "I'm a university student in " + college + " and I took " + degree + " degree"
);

var a = -5;
var b = 5;
var c = 450000;
console.log(a == b);
console.log(a != b);
console.log(c < a);
console.log(b == c);
console.log(c > b);

var data_student = [
  "Manda",
  "Dheta",
  "Christian",
  "Furqan",
  "Panji",
  "Arsyad",
  "Gatot"
];
var city = [
  "Surabaya",
  "Semarang",
  "Serpong",
  "Aceh",
  "Jakarta",
  "Kediri",
  "Malang"
];
console.log(data_student);
console.log(data_student[3]);
console.log("Hapus 1 data terakhir dari list : " + data_student.pop());
console.log(data_student.push("Ipul", "Adi"));
console.log(data_student);
console.log(
  "Gabungkan semua data dengan karakter - : " + data_student.join("-")
);
console.log("Sort from ascending : " + data_student.sort());
console.log("Gabungkan array1 dengan array2 : " + data_student.concat(city));
