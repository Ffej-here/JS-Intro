let culoare = "verde";

switch (culoare) {
  case "verde":
    console.log("culoarea selectata este verde");
    break;
  case "albastru":
    console.log("culoarea selectata este albastru");
    break;
  case "mov":
    console.log("culoarea selectata este mov");
    break;
  case "rosu":
    console.log("culoarea selectata este rosu");
    break;
  default:
    console.log(
      "intra pe default pentru ca niciunul dintre parametrii nu este cel asteptat"
    );
    break;
}
