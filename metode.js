let nume = "Maria";
console.log(nume);
let mariaMare = nume.toUpperCase();
console.log(mariaMare);

function litereMici() {
  return nume.toLocaleLowerCase();
}

let mariaMicaDinFunctie = litereMici();
console.log(mariaMicaDinFunctie);

let sirDeCaractere = "Ana are mere si pere";
console.log(sirDeCaractere.lastIndexOf("r"));

console.log(sirDeCaractere.substring(3, 7));
console.log(sirDeCaractere.replace("a", 7));
let sirPrelucrat = sirDeCaractere.replace("a", 7);
console.log(sirPrelucrat.replace("a", 7));
