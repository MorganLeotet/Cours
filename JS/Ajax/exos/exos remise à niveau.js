// Exercice 1 //

let ville = "Paris";
let nom = "bernard";

console.log(ville, nom);

// Exercice 2 //

let prix = 19.99;
let disponible = false;

console.log(prix, disponible);

// Mini-Projet 1 //

let prenom = "bob";
let age = 24;

console.log(" Bonjour je m'appelle " + prenom + " et j'ai " + age + "ans ");


// Exercice 3 //

let note = 13;

if (note >= 12) {
    console.log("Admis");
} else {
    console.log(" Rattrapage ");
}

// Exercice 4 //

let temperature = 22;

if (temperature >= 30) {
    console.log(" il fait chaud ");
} else {
    console.log(" temperature normale ");
}

// Exercice 5 //

let score = 75;

if (score >= 90) {
    console.log(" tu es un expet ");
}else if (score >= 65) {
    console.log( " tu es pas mal ");
} else {
    console.log(" faut bosser" );
}

// Mini-Projet 2 //

let myAge = 12;
let abonnement = true;

if (myAge >= 18 || abonnement === true) {
    console.log(" accès Autorisé ");
} else {
    console.log(" accès refusé ");
}

// Exercice 6 //

function direAge(age) {
    console.log( "tu as " + age + " ans " );
}

direAge(12);

// Exercice 7 //

function verifierMajeur(age) {
    if (age >= 18) {
        console.log(" Majeur ");
    }else {
        console.log(" Mineur ");
    }
}

verifierMajeur(11);

// Exercice 8 //

function carre(nbr) {
    return nbr * nbr;
}

let result = carre(8);
console.log(result);

// Exercice 9 //

function estPair(nbr) {
    if (nbr % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
estPair(6);
console.log(estPair(6));

// Mini-Projet 3 //

function moyenne(note1, note2, note3) {
    return (note1 + note2 + note3) / 3;
}

let resultat = moyenne(12, 5, 14);

if (resultat >= 10) {
    console.log(" Admis ");
}else {
    console.log(" refus ");
}


