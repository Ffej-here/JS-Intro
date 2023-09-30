let masini = ["Mercedes", "Dacia", "Tesla", "BMW", "Mazda"];

console.log(masini[1]);

let join = masini.join(" | ");
console.log(join);

let lastIndex = masini.lastIndexOf("BMW");
console.log(lastIndex);

masini.pop();
console.log(masini);
masini.pop();
console.log(masini);

masini.unshift("Honda");
console.log(masini);

masini.push("Toyota");
console.log(masini);

let slice = masini.slice(1, 3);
console.log(slice);

masini.forEach(function (masina, index) {
  console.log(index, masina);
});
