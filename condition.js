// let age = 18;
// let textAffiche = "Vous êtes";
// if (age < 18) {
//   console.log(textAffiche + "mineur.");
// } else {
//   console.log(`${textAffiche} majeur.`);
// }

let couleur = "vert";

// if (couleur === "rouge") {
//   console.log("Danger !");
// } else if (couleur === "vert") {
//   console.log("Succès !");
// } else if (couleur === "bleu") {
//   console.log("Infos !");
// } else if (couleur === "orange") {
//   console.log("Attention !");
// } else {
//   console.log("Pas de couleur");
// }
switch (couleur) {
  case "rouge":
    console.log("Danger !");
    break;

  case "vert":
    console.log("Succès !");
    break;

  case "bleu":
    console.log("Infos !");
    break;

  case "orange":
    console.log("Attention !");

  default:
    console.log("Pas de couleur");
    break;
}
