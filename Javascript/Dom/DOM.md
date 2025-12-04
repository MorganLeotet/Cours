# Le DOM : Manipuler une page web avec JS

*Le DOM (Document Object Model) permet à JS de modifier une page HTML:

- changer du texte
- ajouter des éléments
- changer des couleurs
- réagir au clics
- etc...


1. Le DOM c'est Quoi ?

*Quand on ouvre une page web, le navigateur transforme le HTML en une structure d'objets appelée DOM.

Exemple:

<h1 id="title">Hello</h1>
<p class="text">Welcome on the page</p>

*JS peut récupérer et modifier ces éléments

2. Sélectionner un élément

- Méthodes les plus courantes :

=> document.getElementById() : sélectionné par l'Id

exemple: 

let titre = document.getElementByID("title")

=> document.querySelector() : sélectionne le premier élément qui correspond à un sélecteur css

exemple :

let parazgraphe = document.querySelector(".text")

=> document.querySelectorAll() : sélectionne plusieurs éléments

exemple:

let paragraphe = document.querySelectorAll(p)

3. Modifier le contenu

exemple : 

let titre = document.getElementById("title")
titre.textContent = "nouveau titre" 

4. Modifier le style

titre.style.color = "red"
titre.style.fontSize = "30px"

5. Ajouter un élément

let nouveau = document.createElement("p")
nouveau.textContent = ' je suis un paragraphe ajouté '

document.body.appenChild(nouveau)

6. Ecouter un évènement

exemple: réagir au clic

let bouton = document.getElemntById('btn')

bouton.addEventListener('click', () => {
    console.log(' tu as cliqué ')
})

7. Ajouter un élément dans la page : on utilise appendChild() ou append()

exemple : 

document.body.appenChild(nouveau)

8. Supprimer un élément : on utilise remove()

exemple : 

let titre = document.getElementbyId('titre')
titre.remove()

*l'élément disparaît du DOM

9. Vider un élément : effacer tout son contenu

exemple : 

let div = document.getElementByID('boite')
div.innerHTML = ""

*Pratique pour remettre un élément à zéro