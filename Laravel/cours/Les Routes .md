# Les Routes (le coeur de Laravel)

## C'est quoi une Route 

Une route dit à Laravel :  "Quand un utilisateur va à cette URL, fais ça."

- Exemple : 

Dans Laravel, les routes sont dans: routes/web.php

- Exemple : 

Route::get('Bonjour', function () ) {
    return "Bonjour Laravel";
}

si tu vas sur : http://localhost/bonjour , tu verras: "Bonjour Laravel"

Explication du code :

    . Route::get --> requête GET
    . /bonjour --> URL
    . function () {} --> action à faire
    . return --> ce que Laravel affiche

## Lien connus

Avant, on faisait :  echo "Bonjour";

Maintenant, Laravel fait :  return "Bonjour";

Même idée, meilleure organisation

# Les routes + Paramètre

Exemple : 

Route::get('Bonjour/{prenom}', function ($prenom) ) {
    return 'Bonjour' . $prenom;
}

URL ==> /bonjour/bob

resultat ==> bonjour bob

## IMPORTANT 

    . {prenom} --> variable dans l'URL
    . $prenom --> arrive dans la fonction

