# Les Fonctions

*Morceau de code qui fait quelque chose sur demande, on la définis une seule fois et on peut l'utiliser autant de fois que l'on veut.

1. Création d'une fonction

exemple avec la fonction "direBonjour"

function direBonjour () {
    console.log('hello')
}

direBonjour();  // affiche 'hello' dans la console

Explication :

function: mot-clé pour créer une fonction

direBonjour: nom de la fonction

{} : corps de la fonction, les actions qu'elle fait

direBonjour() : l'appel d'une fonction ( on éxécute la fonction )

- Les paramètres :

*Une fonction peut recevoir des informations

exemple : 

function saluer(prenom) {
    console.log(' hello ' + prenom )
}

saluer(' henry ')       // affiche 'henry' dans la console
saluer (' bob ')        // affiche ' bob ' dans la console

2. Les fonctions qui renvoient une valeur ( RETURN )


exemple : 

function addition(a, b) {
    return a + b
}

let result = addition(5 + 3)

console.log(result)         // affiche 8 dans la console