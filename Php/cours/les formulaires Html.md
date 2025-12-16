# Les Formulaires HTML

## Pourquoi c'est crucial ?

Laravel reçoit des données utilisateur via des formulaires

. login
. inscription
. recherche
. ajout en base de données

- Exemple de formulaire HTML :

en html : 

<form method="POST" action="traitement.php">
    <input type="text" name="prenom">
    <input type="submit" value="envoyer">
</form>

Explication :

method="POST" ==> envoi sécurisé
name="prenom" ==> clé utilisée en php

- Récupération côté Php (traitement.php) :

en php:

<?php

$prenom = $_POST['prenom'];
echo " Bonjour " . $prenom;

?>

# Règle Importante

toujours vérifier si la donnée existe

en php :

if (isset($_POST['prenom'])) {
    echo $_POST['prenom']
}

