let sirDeCaractere = " mere si pere";
let concatenareSimpla = "Ana " + "are" + sirDeCaractere;

console.log(concatenareSimpla);

let templateString = `Ana are ${sirDeCaractere}`;
console.log(templateString);

let elem = document.getElementById("element");

let structuralHTML = `<div class = "cuvinte">
                        <div>${sirDeCaractere}</div>
                        <div>are</div>
                        <div>mere</div>
                        </div>`;

console.log(structuralHTML);
