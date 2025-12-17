// Modifier le texte du paragraphe ayant pour id "texte" pour  afficher " Welcome to the DOM "

let texte = document.getElementById("texte");
texte.textContent = " Welcome to the DOM ";

// Créer un bouton et changer le texte du H1 et afficher un message dans la console

let button = document.getElementById("btn");
let title = document.getElementById("title");

button.addEventListener("click", function() {
    title.textContent = " Le Dom c'est ouf !! ";
    console.log(" le h1 est modifié");
})

// Mini-Projet 4 (bouton compteur) //

let compteur = 0;

let btnCompteur = document.getElementById("compteur");
let paragraphe = document.getElementById("word");

btnCompteur.addEventListener("click", function () {
    compteur++;
    paragraphe.textContent = " tu as cliqué " + compteur + " fois ";
})