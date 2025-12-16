/* Les Variables 

let prenom = "Morgan";  // création de la variable "prenom"
let pays = 'France';

console.log(prenom);  // affiche la valeur de la variable "prenom" => 'Morgan'
console.log(pays);

*/

/* Types de Valeurs 

let age = 22;
let estMajeur = true;
let ville = 'Pauillac';

console.log(age);
console.log(estMajeur);
console.log(ville);

*/

/* Opérations et Comparaison 

let a = 10;
let b = 5;
let somme = a + b;
let estPlusGrand = a > b;

console.log(a)
console.log(b)
console.log(somme)
console.log(estPlusGrand)

*/

/* Conditions 

let temperature = 12;       // création de la variable "temperature"

if(temperature >= 30) {             // condition pour l'éxécuter
    console.log('il fait chaud')
} else {
    console.log("c\'est pas encore l'été ")
}

*/

/* Les Fonctions 

function multiplier(a, b) {             // création de la fonction "multiplier"
    return a * b;
}

let result = multiplier(2, 6)           // création d'une varaible "result"
console.log(result)                     // affiche la valeur de la variable "result"

*/

/* Les Tableaux 

let nombres = [ 10, 20, 30 ]        // création d'un tableau "nombres"

console.log(nombres) // affiche le tableau nombres
console.log(nombres[0]) // affiche le premier élément

nombres[1] = 25; // modifie la valeur de l'élément 1
console.log(nombres[1]) // affiche la nouvelle valeur de l'élément 1

nombres.push(40) // ajoute la valeur 40 au tableau
console.log(nombres)

*/

/* Les Boucles 

let animaux = ['chien', 'chat', 'oiseau', 'tortue']

for (let i = 0; i < animaux.length; i++) {      // va afficher la liste des animaux
    console.log(animaux[i])
}

for (let i = 0; i < animaux.length; i++ ) {     // va afficher chaque animal et son numéro
    console.log(i + " : " + animaux[i])
}

*/

/* Les Objets

let voiture = {                 // création d'un objet "voiture"
    marque : 'ferrari',
    modèle : 'Gt 500',
    annee: 2002
}

console.log(voiture.marque) // affiche tous les éléments de l'objet voiture

voiture.annee = 2006;   // modifie l'année

console.log(voiture.annee) 

voiture.couleur = 'rouge'       // Ajoute un nouvel élément à l'objet voiture

console.log(voiture)

*/

/*

let etudiant = {            // création d'un objet "étudiant"

    nom: 'bob',
    age: '16',
    notes : [12, 15, 18]
}

console.log(etudiant.nom)           // affiche le nom   =>  bob

console.log(etudiant.notes[1])      // affiche la 2e note   => 15

console.log(etudiant.age)           // affiche l'age    => 16

etudiant.moyenne = 12 + 15 + 18 / 3        // ajout d'une propriété

// correction de la propriété "moyenne" 

let moyenne = (etudiant.notes[0] + etudiant.notes[1] + etudiant.notes[2]) / 3
etudiant.moyenne = moyenne

console.log(etudiant.moyenne)

etudiant.nom = 'Tobby'          // modification de la propriété nom

console.log(etudiant.nom)

etudiant.ville = 'houston'      // ajout d'une nouvelle propriété

console.log(etudiant)

*/

/* Fonctions Fléchées 

const saluer = nom => {     // création d'une fonction fléchée "saluer"
    console.log('salut'  + nom + '!')
}

saluer('bob')

const carre = X => X * 2e   // création d'une fonction fléchée pour avoir le carré d'un nombre

console.log(carre(5))

*/

/* Méthodes Utiles : MAP, FILTER, FIND, REDUCE 

    -1 : MAP

 // Exos 1: Avoir le carré de chaque nombre // 

let nombres = [ 2, 5, 8, 10 ]

let carre = nombres.map(n => n * n )  // on renvoie un nouveau tableau avec le carre des nombres du tableau "nombres"

console.log(carre)

// Exos 2: Avoir la longueur de chaque mot //

let mots = [ 'hello', 'coucou', 'bonjour']

let longueur = mots.map(mots => mots.length)

console.log(longueur)

// Exos 3: Avoir chaque prix augmenté de 20% //

let produits = [
    { nom: "pomme", prix: 2 },
    { nom: 'poire', prix: 3 },
    { nom: 'orange', prix: 5 }
]

let prixTva = produits.map(produits => produits.prix + 20 / 100)

console.log(prixTva)



    -2 : FILTER

// Exos 1: Avoir les nbrs > 10 // 

let nombres = [ 3, 7, 12, 5, 20 ]

let grandsNbres = nombres.filter(nombres => nombres > 10 )

console.log(grandsNbres)

// Exos 2: Avoir seulement les users de + de 18ans //

let users = [

    { nom: 'bob', age: 19 },
    { nom: 'nico', age: 12 },
    { nom: 'emma', age: 23 },
    { nom: 'bobby', age: 16 },
]

let majeur = users.filter(users => users.age >= 18 )    // on veut juste les "users" majeurs

console.log(majeur)

// Exos 3: Avoir que les mots de + de 4 lettres //

let mots = ['chat', 'tigre', 'lion', 'elephant']

let motLong = mots.filter(mots => mots.length > 4 )     // on veut juste les mots de + de 4 lettres

console.log(motLong)



    -3 : REDUCE 

// Exos 1: Avoir la somme de tous les nombres // 

let nombres = [ 5, 10, 15, 22, 34 ]

let somme = nombres.reduce((total, nombres) => total + nombres, 0 )     // on veut la somme du tableau "nombres"

console.log(somme)

// Exos 2: Avoir la moyenne des notes 

let notes = [ 12, 14, 15, 20 ]

let moyenne = notes.reduce((total, notes) => total + notes / 4 )    // on veut juste la moyenne de "notes"

console.log(moyenne)

// Exos 3: Avoir le compte pour chaque lettre qui apparaît //

let lettres = [ 'a', 'b', 'a', 'c', 'b', 'a' ]

let compteur = lettres.reduce((total, lettres) => {
    total[lettres] = (total[lettres] || 0 ) + 1;
    return total;
}, {});

console.log(compteur)



//- Exos bilan //

let produits = [

    { nom: 'pomme', prix: 3, enPromo: true },
    { nom: 'poire', prix: 4, enPromo: false },
    { nom: 'orange', prix: 3, enPromo: true },
    { nom: 'kiwi', prix: 5, enPromo: true },
    { nom: 'cerise', prix: 8, enPromo: false },
]

// -1 : Avoir uniquement les promos 

let productPromo = produits.filter(produits => produits.enPromo)

console.log(productPromo)

// -2:  Avoir le prix de promos

let pricePromo = produits.map(produits => produits.prix * 1.2 )

console.log(pricePromo)

// -3: Avoir le total prix des promos //

let totalPromo = pricePromo.reduce((total, prix) => total + prix, 0 )

console.log(totalPromo)

*/























