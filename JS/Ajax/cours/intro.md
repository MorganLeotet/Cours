
# Ajax (les bases essentielles)

## Ajax c'est quoi ??

Ajax = communiquer avec un serveur sans recharger la page

- Avant : 

    . clic --> rachargement de la page

- Avec Ajax :

    - clic --> données reçues --> page mise à jour sans rechargement

Exemples Concrets :

    . afficher des posts

    . charger un profil

    . envoyer un formulaire

    . afficher des données API

### Ce que fait Ajax en pratique

    1. Javascript envoie une requête

    2. le serveur répond avec des données (Json)

    3. Javascript affiche les données en HTML


## Le mot clé moderne : Fetch()

On utilise plus XMLHttRequest, mais fetch()

Exemple :

en Js : 

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

Explication :

    . fetch(url) :  envoie une requête vers un serveur

    . .then(response => response.json()) :  Transforme la réponse en objet Javascript

    . .then(data => ...) :  data contient les données reçus


## JSON

### A quoi ça ressemble

Exemple :

en Json :

{
  "name": "Ali",
  "email": "ali@mail.com"
}

En Javascript, c'est un objet


## AJAX + HTML 

Exemple complet voir cours.html

Ce qui se passe : 

    . Clic sur le bouton

    . requête Ajax

    . réception des données

    . création dynamique de <li>

    . affichage dans la page


