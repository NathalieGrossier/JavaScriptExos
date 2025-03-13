// Array
// Méthode Object
// let tabOfNumbers2 = new Array();
// console.log(tabOfNumbers);

// for (let i = 0; i < tabOfNumbers.length; i++) {
//   if (tabOfNumbers[i] > 8) {
//     console.log(tabOfNumbers[i]);
//   }
// }

let tabOfNumbers = [1, 6, 7, 9, 10];

// Inverser le traitement
// for (let i = tabOfNumbers.length - 1; i >= 0; i--) {
//   console.log(tabOfNumbers[i]);
// }

for (let number in tabOfNumbers.reverse()) {
  // console.log(number);
}
for (let number of tabOfNumbers) {
  // console.log(number);
}

// methodes array
tabOfNumbers.map((number) => {
  console.log(number);
});
