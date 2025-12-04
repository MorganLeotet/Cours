/* Conditions avancées 

// Exos 1: afficher "Accès refusé" : !

let admin = false

if (!admin) {
    console.log('Accès refusé')
}


// Exos 2: température entre 20 et 30  : ET

let temperature = 25

if (temperature >= 20 && temperature <= 30 ) {
    console.log(' il fait chaud ')
}

// Exos 3 : Réussis / échec : ternaire 

let note = 12

let message = note <= 10 ? 'réussis' : 'echec'

console.log(message)

*/


/* Boucles Avancées 

// Exos 1 : afficher chaque animal //

let animaux = [ 'chat', 'tigre', 'chien']

for (let animal of animaux) {
    console.log(animal)
}

// Exos 2: afficher chaqsue clé puis chaque valeur

let voiture = {

    marque: 'toyota',
    modèle: 'corolla',
    année: 2020
}

for (let cle in voiture) {
    console.log(cle)
    console.log(voiture[cle])
}

// Exos 3: affiche nom + score

let players = [

    {nom: 'leo', score: 23},
    {nom:'bob', score: 10}
]

for (let player of players) {
    console.log(player.nom + ":" + player.score)
}

*/