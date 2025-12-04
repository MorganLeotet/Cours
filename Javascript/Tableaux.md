# Les Tableaux

*Sert à stocker plusieurs valeurs dans une variable

1. Création d'un tableau

exemple : 

let fruits = [ 'pomme', 'poire', 'orange']

Explication : 

*Un tableau se créer avec []
*Ici "fruits" est un tableau composé de 3 éléments (pomme, poire, orange)

2. Accéder à un élément

*Les éléments sont numérotés à partir de 0

console.log(fruits[0])    // affiche 'pomme'

Explication: 

on demande d'afficher dans le tableau "fruits", l'élément qui porte l'index 0 et comme dans un tableau les éléments sont notés à partir de 0, alors l'élément qui porte l'index 0 est 'pomme'

console.log(fruits[1])      // affiche 'poire' dans la console


3. Modifier un élément

Exemple: toujours avec notre tableau " fruits" 

fruits[1] = ' Fraise'

Explication :

Ppur modifier une valeur, on prend l'index de l'élément du tableau que l'on veut changer et on écrit sa nouvelle valeur

console.log(fruits[1])          // affiche 'fraise' dans la console

console.log(fruits)             // Affiche le tableau fruits mais avec 'Fraise' qui a remplacé 'poire'

4. Longueur du Tableau

console.log(fruits.length)      // affiche le nombre d'élément présent dans le tableau, 

Donc dans notre exemple, le tableau "fruits" est composé de 3 éléments alors on affiche 3 dans la console

5. Ajouter et Retirer un élément

- Pour ajouter :

fruits.push(' kiwi')

console.log(fruits)         // affiche la tableau "fruits" avec l'élément ' kiwi' en plus

- Pour retirer :

fruits.pop(' orange ')

console.log(fruits)         // affiche le tableau "fruits" avec l'élément 'orange' en moins



