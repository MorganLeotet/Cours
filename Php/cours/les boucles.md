# Les boucles

- A quoi ça sert ?

A répeter une action automatiquement

- Boucle FOR

Exemple : 

=> au lieu d'écrire :   echo 1;
                        echo 2;
                        echo 3;
                        echo 4;

=> on écrit : 

for ($i = 1; $i <= 5; $i++) {
    echo $i . "<br>";
}

- Explication : 

=> $i = 1 ==> on commence à 1
=> $i < 5 ==> on continue tant que c'est vrai
=> $i++ ==> on ajoute 1 à chaque tour

- Exemple Concret : 

for ($i = 1; $i <= 3; $i++) {
    echo "Bonjour<br>"
}

résultat : 

Bonjour
Bonjour
Bonjour

- Boucle WHILE

Exemple : 

$i = 1;

while ($i <= 5) {
    echo $i . "<br>";
    $i++;
}

même résultat mais écriture différentes