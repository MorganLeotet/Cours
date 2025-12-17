
# Qu'est-ce que Javascript

    . HTML ==> Structure d'un site (squelette)

    . CSS ==> Apparence du site (vêtements)

    . Javascript ==> Comportement du site (cerveau)

Javascript permet :

    . Réagir au clic

    . Modifier du texte sans recharger la page

    . Envoyer / Recevoir des données (AJAX)


# Où écrit-on le Javascript

Dans le fichier HTML ou le mieux dans un fichier à part (plus propre)


# Les variables 

Sert à stocker des informations 

Exemple: 

let prenom = "bob";
let age = 20;

let : créer une variable
"bob" : texte
20: un nombre

## Afficher quelque chose

pour afficher quelque chose, on fait un console.log

Exemple : 

console.log(prenom);

Affiche "bob" dans la console du navigateur


# Les types de données

- 3 principaux types :

    . Texte : exemple : let texte = "bonjour";      ==> Texte -> entre ""

    . Nombre : exemple : let nombre = 10;           ==> Nombre -> sans ""

    . Booléen : exemple : let vraiOuFaux = true;    ==> booléen -> true ou false


# Les conditions (if / else)

Permet à Javascript de pendre une décision

SI la condition est vrai -> on fait une action

SINON -> on fait autre chose

==> Structure de la condition en JS :

if (condition) {
    -> code éxécuté si la condition est vraie
} else {
    -> code éxécuté si la condition est fausse
}

- Exemple : 

SI j'ai plus de 18 ans ALORS je peux entrer SINON je reste dehors

let age = 17;       // je créer une variable "age" qui va veut en paramètre de la condition

if (age >= 18) {
    console.log(" je peux entrer !! );
} else {
    console.log(" tu restes dehors !!!! );
}

- Explication : 

    . >= -> supérieur ou égal

    . age >= 18 -> question posée à javascript

    . si la réponse est true -> premier bloc

    . Sinon -> else

Dans cet exemple, age = 17 donc on reçoit le message " Tu restes dehors !!!" car la condition est fausse ( 17 n'est pas supérieur ou égale à 18)

## Opérateurs à connaître

    . > ==> plus grand que

    . < ==> plus petit que

    . >= ==> supérieur ou égal

    . <= ==> inférieur ou égal

    . == ==> égal

    . === ==> strictement égal

    . != ==> différent


# Plusieurs Conditions

Quand il y a deux choix :

- Exemple : 

let heure = 14;

if (heure < 12) {
    console.log("bonjour);
}else if (heure < 18) {
    console.log(" bon après-midi ");
}else {
    console.log(" bonne soirée ")
}

Ici ce sera " bon après-midi " 

Javascript teste dans l'ordre, donc il va tester la première condition et si elle n'est pas bonne il passe à la suivante jusqu'à ce que la condition soit remplie.

# Les Fonctions

Sont des blocs de code réutilisables.

    -> au lieu de répéter le même code 10 fois
    -> tu mets ton code dans une fonction et tu l'appelle quand tu veux


- Exemple (machine à café) :

    -> tu appuies sur un bouton
    -> elle fait toujours la même chose

En Javscript, une fonction = un bouton

## Structure d'une fonction (sans paramètre)

function nomdelafonction() {
    => code s'éxécute à l'appel de la fonction
}

Pour appeler une fonction :  nomdelafonction()

- Exemple : 

function direbonjour() {
    console.log(" bonjour ");
}

si fonction pas appelé y se passe rien

direBonjour();  ==> fonction appelé donc cela va afficher dans la consoel du navigateur " bonjour "

## Fonction avec paramètre

Paramètre = information donnée à la fonction

Exemple : 

function saluer(prenom) {
    console.log(" bonjour " + prenom);
}

saluer("bob");
saluer("max");

Cela va afficher dans la console "bob" et "max".

Ici, prenom est une variable locale de la fonction

# Retourner une valeur

## Différence importante

    . console.log ==> Affiche

    . return ==> Renvoie une valeur

Exemple : 

function addition(a , b) {
    return a + b;
}

let result = addition(5+3);

console.log(result)     ==> Affiche 8 ( résultat de l'addition de 5 + 3)

La fonction donne un résultat, pas juste un affichage

