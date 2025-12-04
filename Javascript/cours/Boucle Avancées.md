# Les Boucles Avancées

1. Boucle for of

*Sert à parcourir les tableaux (ou chaîne de caractère)

Exemple:

let fruits = [ 'pomme', 'poire', 'orange' ]

for (let fruit of fruits) {
    console.log(fruit)          // affiche chaque élément du tableau
}

*For of = je récupère chaque élément du tableau


2. Boucle for in

*Sert à parcourir les objets

*Elle donne le nom de la propriété (la clé)

Exemple:

let personne = {

    nom: 'emma',
    age: 22,
    ville: 'dublin'
}

for (let cle in personne) {
    console.log(cle)                // affiche la clé
    console.log(persoenne[cle])     // affiche la valeur
}

*for in : je récupère chaque clé, puis j'accède à la valeur

3. for of VS for in : la différence essentielle

for of SERT à parcourir un TABLEAU et DONNE la valeur

for in SERT à parcourir un OBJET et DONNE la clé


