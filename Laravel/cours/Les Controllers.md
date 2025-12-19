# Les Controllers

## Pourquoi des Controllers ?

Parce que mettre toute la logique dans web.php :

    . devient vite illisible
    . n'est pas maintenable
    . n'est jamais fait en entreprise

Les routes appellent les controllers

- Etape 1 :  Créer un Controller

code pour créer un Controller depuis le terminal Vs Code , se placer dans le dossier où l'on travail et : 

        ===> php artisan make:controller AgeController (nom du controller)

Toujours utiliser Artisan, c'est :

    . plus rapide
    . plus sûr
    . plus professionnel

Laravel crée :

    . le bon dossier
    . le bon namespace
    . la bonne structure
    . les imports corrects

- Etape 2 : Ecrire un controller

