<?php

$titre = " Exercices Apprentissage PHP " ;
$Title = " Les Variables " ;
$Title2 = " Les Conditions " ;
$Title3 = " Mini Projet " ;
$Title4 = " Les Boucles " ;
$Title5 = " Les Fonctions " ;
$Title6 = " Les Formulaires HTML ";

echo "<!DOCTYPE html>\n" ;
echo "<html lang=\"fr\">\n" ;
echo "<head>\n" ;
echo "    <meta charset=\"UTF-8\">\n" ;
echo "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" ;
echo "    <title>" . htmlspecialchars($titre) . "</title>\n" ;
echo "</head>\n" ;
echo "<body>\n" ;
echo "    <h1>" . htmlspecialchars($Title) . "</h1>\n" ;
echo "    <h2>Exercices</h2>\n" ;
echo "    <p>Exercice 1 : Créez une variable nommée <strong>ville</strong> et affectez-lui la valeur de votre ville de résidence. Affichez ensuite cette variable dans une phrase complète.</p>\n" ;
$ville = " Pauilllac ";
echo " j'habite à " .$ville;

echo "    <h1>" . htmlspecialchars($Title2) . "</h1>\n" ;
echo "    <h2>Exercices</h2>\n" ;
echo "    <p>Exercice 2 : Créez une variable nommé <strong>note</strong> et affectez-lui une valeur numérique. Affichez ensuite cette variable si elle valide bien ou pas la condition.</p>\n" ;
$note = 12;
if ($note >= 10) {
    echo " Admis ";
} else {
    echo " Non Admis ";
}

echo "    <h1>" . htmlspecialchars($Title3) . "</h1>\n" ;
echo "    <h2>Exercices</h2>\n" ;

$prenom = " Michel ";
$age = 34;
echo " Prénom : " .$prenom . "<br>\n" ;
echo " Age : " .$age . " ans <br>\n" ;

if ($age >= 18) {
    echo " Vous êtes majeur. <br>\n" ;
} else {
    echo " Vous êtes mineur. <br>\n" ;
}

echo "    <h1>" . htmlspecialchars($Title4) . "</h1>\n" ;
echo "    <h2>Exercices</h2>\n" ;

for ($i = 1; $i <= 10; $i++) {
    echo "numéro " .$i . "<br>\n" ;
}

echo "    <h2>Exercices</h2>\n" ;

$i = 1;
while ($i <= 5) {
    echo $i . "<br>";
    $i++;
}


echo "    <h2>Mini Projet</h2>\n" ;
echo "Affichez les nombres pairs de 1 à 20 en utilisant une boucle.<br>\n" ;
echo "<p>Boucle For :</p>\n" ;

for ($i = 1; $i <= 20; $i++) {
    echo $i. "<br>\n";
}

echo "<p>Boucle While :</p>\n" ;

$i = 1;
while ($i <= 20) {
    echo $i . "<br>\n";
    $i++;
}

echo "    <h1>" . htmlspecialchars($Title5) . "</h1>\n" ;
echo "    <h2>Exercices</h2>\n" ;

echo "Créer une fonction qui retourne le carré d'un nombre.<br>\n" ;

function nombre($nbr) {
    return $nbr * $nbr;
}
$result= nombre(5);
echo " le carré de nombre(5) est : " .$result;

echo "    <h2>Mini Projet</h2>\n" ;
echo "Créer une fonction qui prend un âge et retourne Majeur ou Mineur.<br>\n" ;

function verifAge($age) {
    if ($age >= 18) {
        return "Majeur";
    } else {
        return "Mineur";
    }
}
$age = 23;
echo "Tu as " .$age . " ans, donc tu es " .verifAge($age) . ".";

// version plus rapide ==> echo statutAge(on met n'importe quel chiffre)


echo "    <h1>" . htmlspecialchars($Title6) . "</h1>\n" ;
echo "    <h2>Exercices</h2>\n" ;
?>

<?php
// Vérifier si les données existent bien

if (isset($_POST['prenom']) && isset($_POST['age'])) {

    $prenom = $_POST['prenom'];
    $age = $_POST['age'];

    echo " prénom : " . $prenom . "<br>\n" ;
    echo " âge : " . $age . " ans <br>\n";

    if ($age >= 18) {
        echo " Majeur. <br>\n" ;
    } else {
        echo " Mineur. <br>\n" ;
    }
} else {
    echo "Formulaire non envoyé ";
}
?>
<?php
// Formulaire HTML
echo "            <form method=\"post\" action=\"Exos5.php\">\n" ;
echo "                <input type=\"text\" name=\"prenom\">\n" ;
echo "                <input type=\"number\" name=\"age\">\n" ;
echo "                <input type=\"submit\" value=\"Envoyer\">\n" ;
echo "            </form>\n" ;
?>
<?php
echo "</body>\n" ;
echo "</html>" ;
?>