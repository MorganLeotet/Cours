# Les Méthodes Utiles sur les Tableaux (MAP, FILTER, FINd, REDUCE)

*Permettent de manipuler les tableaux plus fazcilement que les boucles classiques

1. forEach : Parcourir un tableau

*Comme une boule for mais en plus simple

Exemple : 

let fruits = [ 'pomme', 'poire', 'orange' ]

fruits.forEach(fruit => {
    console.log(fruit)
})

2. Map : Tansformer un tableau et retourner un nouveau tableau

Exemple:

let nombres = [ 1, 2, 3 ]

let doubles = nombres.map(nombres => nombres * 2) 

console.log(doubles)        // affiche un nouveau tableau avec les doubles des nombres du  tableau " nombres "

Explication:

( nombres => nombres * 2 ) : veut dire que pourchaque nbr du tableau retourne le double

et peut s'écrire ( n => n * 2 )

*Map ne modifie pas le tableau original, il renvoie juste un nouveau tableau

3. FILTER : Garder seulement certains éléments

Exemple :

let age = [ 12, 22, 33 ]

let majeur = age.filter(a => a >= 18)

console.log(majeur)         // affiche (22, 33) dans la console

4. FIND : Trouver un élément précis

Exemple:

let users = [ 'Alice', 'Emma', 'Bob' ]

let trouve = users.find(u => u ==== 'emma')

console.log(trouve)         // Affiche 'emma' dans la console

*Si aucun élément ne correspond alors "find" renvoie undefined

5. REDUCE : Réduire un tableau à une seule valeur

Exemple: 

let nombres = [ 5, 6, 5, 10 ]

let somme = somme.reduce((total, n) => total + n , 0)

console.log(somme)      // affiche le total du tableau "nombres" 26