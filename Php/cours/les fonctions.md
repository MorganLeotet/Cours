# Les Fonctions

- Pourquoi les fonctions ?

Pour éviter de répéter du code et le rendre plus propre

- Exemple sans fonction :

echo " Bonjour John<br> ";
echo " Bonjour Michel<br> ";
echo " Bonjour Alice<br> ";

- Exemple avec une fonction :

function direBonjour($prenom) {
    echo " Bonjour " .$prenom . "<br>";
}

- Utilisation :

direBonjour("John");
direBonjour("Michel");
direBonjour("Alice");

Explication : 

function ==> je crée une fonction
$prenom ==> paramètre (valeur donnée à la fonction)
le code dans la fonction (echo " Bonjour ") s'éxécute à chaque appel

- Fonction avec un retour :

Exemple :

function addition($a, $b) {
    return $a + $b;
}

$result = addition(5, 3);
echo result;  ===>> le resultat affiche 8

Explication : 

return ==> renvoie une valeur