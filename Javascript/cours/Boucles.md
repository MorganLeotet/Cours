# Les Boucles

*Servent à répéter une action plusieurs fois automatiquement

1. FOR

Exemple : 

for (let i = 0; i < 5; i++ ) {
    console.log(' tour ', i)
}

Explication :

let i = 0 :  variable compteur i démarre à 0

i < 5 : la boucle s'éxécute tant que i est inférieur à 5

i++ : à chaque passage de la boucle, on ajoute 1 à i ( on incrémente i de 1)

- Parcourir un tableau

Exemple : 

let fruits = [ 'pomme', 'poire', 'orange' ]

for (let i = 0; i < fruits.length; i++ ) {
    console.log(fruits[i])
}

on affiche le tableau fruits dans la console



