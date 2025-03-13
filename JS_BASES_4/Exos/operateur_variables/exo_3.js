// Exercice 3 :
// Déclarez une variable "prenom" et affectez-lui votre prénom
// Déclarez une variable "nom" et affectez-lui votre nom
// Déclarez une variable "nomComplet" qui contient la concaténation de "prenom" et « nom »
// Affichez la valeur de "nomComplet" en utilisant "console.log()"
let prenom = 'john';
let nom = 'doe';
let age = 30;

let nomComplet = "Bonjour Je m'apelle " + prenom + ' ' + nom + " et j'ai " + age + ' ans.';
// Templates littérals ES6
let nomComplet2 = `Bonjour je m'apelle ${prenom} ${nom} et j'ai ${age} ans`;

console.log(nomComplet);
console.log(nomComplet2);
