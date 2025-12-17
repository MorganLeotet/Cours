
# Javascript + HTML (DOM)

## Problème que ça résout

Jusqu'ici, Javascript affichait dans la console.

Mais on veut : 

    . changer du texte sur la page

    . réagir à un clic

    . afficher des données

Pour cela, Javascript doit parler au HTML

## Le DOM

Le Dom = page HTML vue comme un arbre d'objets

Javascript peut :

    . lire le HTML

    . modifier le HTML

    . supprimer / ajouter des éléments

- HTML de base sur lequel on va travailler

                <head>
                <title>Mon test JS</title>
                </head>
                <body>

                <h1 id="titre">Bonjour</h1>
                <button id="btn">Clique ici</button>

                <script src="script.js"></script>
                </body>


### Sélectionner un élément HTML

- Par son ID :

en JS :  let titre = document.getelementById("titre");

résultat : maintenant, "titre" représente le h1

### Modifier le contenu

en JS :    titre.textContent = " hello Javascript ";

résultat : le texte sur la page change sans recharger


### Réagir à un clic (évènement)

en JS :     let bouton = doccument.getElmentById("btn");
            
            bouton.addEventListener("click", function () {
                console.log(" Bouton cliqué ");
            })

résultat : quand tu cliques, le code s'éxécute

### Modifier la page au clic

en Js :     bouton.addEventListener("click", function() {
            titre.textContent = " tu as cliqué ";
            })

résultat :  quand on clique, le texte change

