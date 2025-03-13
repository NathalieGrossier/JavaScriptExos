// let tabOfNumbers = [];
// ou, c'est la même chose :
// let tabOfNumbers2 = new Array();

// ---------------------------------

// LA boucle de base pour traiter des tableaux

// let tabOfNumbers = [1, 6, 8, 9, 10];
// console.log(tabOfNumbers);

// for (let i = 0; i < tabOfNumbers.length; i++) {
//       console.log(tabOfNumbers[i]);
// }

// -------------------------------------

// autre if :
// let tabOfNumbers = [1, 6, 8, 9, 10];
// console.log(tabOfNumbers);

// for (let i = 0; i < tabOfNumbers.length; i++) {
//   if (tabOfNumbers[i] > 8) {
//     console.log(tabOfNumbers[i]);
// //   }
// // }

// // ---------------
// // // Pour partir de la fin :
// let tabOfNumbers = [1, 6, 8, 9, 10];

// // for (let i = tabOfNumbers.length - 1; i >= 0; i--) {
// //   console.log(tabOfNumbers[i]);
// // }
// // // ---------------

// for (let number_nom_parlant_par_rapport_au_tableau in tabOfNumbers.reverse()) {
//   console.log(number_nom_parlant_par_rapport_au_tableau);
// }

// for (let number_nom_parlant_par_rapport_au_tableau of tabOfNumbers.reverse()) {
//   console.log(number_nom_parlant_par_rapport_au_tableau);
// }

// // autres - méthodes array REACT pour créer des div, boucles par exemple pour un blog, il va créer une div par article :
// tabOfNumbers.map((number) => {
//   console.log(number);
// });

// EXOS :

// let age = 18;
// let textAffiche = "Vous êtes";
// if (age < 18) {
//   console.log(textAffiche + "mineur.");
// } else {
//   console.log(`${textAffiche} majeur.`);
// }

// let tabOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < tabOfNumbers.length; i++) {
//   console.log(tabOfNumbers[i]);
// }

// ----------------
// EXERCICE 3 :
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// ----------------

let i = 6;

while (i < 10) {
  console.log("vrai");
  i++;
  //   i += 2;
}

// do {
//   console.log("vrai");

// } while (i < 10);
