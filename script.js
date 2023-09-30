let varsta = 30;
let an = 2023;

console.log(varsta, an);

var variabilaNedefinitaInca = null;
var valoareInitializataCuNimic;

let array = [
  1,
  2,
  3,
  false,
  variabilaNedefinitaInca,
  valoareInitializataCuNimic,
];

let obiect = {
  an: 2023,
  varsta: 40,
  nume: "Ionescu",
};

console.log(obiect.nume);

array.push(obiect);

console.log(array);

console.log(array[6].nume);
