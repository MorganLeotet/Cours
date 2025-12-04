# Les Objets

*Permet de regrouper plusieurs informations dans une seule structure (boîte)

1. Création d'un objet

Exemple:

let personne {

    nom: 'bob,
    age: 19,
    ville: 'Paris'
}

Explication :

- nom, age, ville sont ce qu'on appel les Propriétées ou Attributs de l'objet

- 'bob', 19, 'Paris' sont les Valeurs de l'objet

2. Accéder aux données de l'objet

Exemple : 

console.log(personne.nom)       // affiche 'bob' dans la console

3. Modifier une Propriétée

Exemple:

personne.age = 22           // affiche 22 au lieu de 19 dans la console


4. Ajouter une Propriétée

Exemple:

personne.profession = 'développeur'     // affiche une propriété en plus dans l'objet "personne"

5. Objet + Tableau

*On peut avoir un tableau dans un objet

Exemple:

let personne = [

    { nom: 'bob', age: 19 }
    { nom: 'emma', age: 23 }
    { nom: 'henry', age: 25 }
]

console.log(personne[0].nom)            // affiche 'bob' dans la console

