/* Modifier des éléments 

let titre = document.getElementById('message')
let bouton = document.getElementById('changer')
let paragraphe = document.querySelector('.texte')

changer.addEventListener('click', () => {
    titre.textContent = 'message mis à jour'
    titre.style.color = "red"
    paragraphe.textContent = 'modifié'
})

*/

/* Ajouter des éléments dans la page 

let bouton = document.getElementById('changer')

bouton.addEventListener('click', () => {
    let nouveau = document.createElement('p')
    nouveau.textContent = 'paragraphe ajouté'
    document.body.appendChild(nouveau)
})

*/


