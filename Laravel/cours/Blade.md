### BLADE (les bases)

 . Blade ==> moteur de template de Laravel
 . sert à afficher le HTML proprement

- le controller prépare les données et Blade les affiche.

Les vues Blade sont dans : 

ressources/views

un fichier Blade se nomme comme ceci :

 . welcome.blazde.php       ⚠️ TOUJOURS .blade.php


1. Première vue Blade

Dans le dossier views qui est dans ( ressources/views) créer le fichier bonjour.blade.php et y mettre le code suivant :

                                <!DOCTYPE html>
                                <html>
                                <head>
                                    <title>Bonjour</title>
                                </head>
                                <body>
                                    <h1>Bonjour Laravel 👋</h1>
                                </body>
                                </html>

voir l'exemple dans le dossier Laravel-learning (sur un autre Vs Code)

2. Afficher une vue depuis une route

On suit le chemin suivant : routes/web.php

et dans le fichier web.php on y met le code suivant :

                                Route::get('/bonjour', function () {
                                    return view('bonjour');
                                });

puis on va sur l'URL : http://127.0.0.1:8000/bonjour

3. Passer des données 

On suit le chemin : ressources/views et dans le dossier views on créer le fichier profil.blade.php

Et on y met ce code : 

                                <h1>Profil</h1>

                                <p>Prénom : {{ $prenom }}</p>
                                <p>Âge : {{ $age }}</p>

👉 {{ }} = affiche une variable en sécurité

4. Les conditions

Rappel :  une condition sert à dire : " si quelque chose est vrai => je fais ça SINON je fais autre chose "

- ✅ condition la plus simple : @if (si)

exemple :  

            @if(age <= 18)
                <p> tu es mineur </p>
            @endif

👉 traduction : si l'age est inférieur ou égal à 18, alors j'affiche " tu es mineur "

❌ Avec un sinon : @else (sinon)

exemple :

                @if($age >= 18)
                <p>Tu es majeur</p>
            @else
                <p>Tu es mineur</p>
            @endif

👉 traduction : si l'âge est supérieur ou égal à 18 => Majeur SINON => Mineur

🔀 Plusieurs cas possibles : @elseif (sinon si)

exemple :

            @if($note >= 16)
                <p>Très bien</p>
            @elseif($note >= 10)
                <p>Passable</p>
            @else
                <p>Insuffisant</p>
            @endif

👉 traduction: 

 . si note >= 16 ==> très bien
 . sinon si note >= 10 ==> passable
 . sinon ==> insuffisant

🔍 Vérifier si quelque chose existe : @isset

exemple :

        @isset($user)
            <p>Bonjour {{ $user->name }}</p>
        @endisset

👉 traduction : si la variable "user" existe, j'affiche son nom

🚫 Vérifier si c’est vide : @empty

exemple : 

        @empty($messages)
            <p>Aucun message</p>
        @endempty

👉 traduction : si la variable est vide ==> j'affiche "Aucun Message"

🔐 Vérifier une condition simple (raccourci) : @unless

exemple : 

        @unless($isAdmin)
            <p>Accès interdit</p>
        @endunless

👉 traduction : si tu n'es pas admin ==> accès interdit

👤 Conditions liées à l’utilisateur connecté

exemple : 

        @auth
            <p>Bienvenue !</p>
        @endauth

        @guest
            <p>Veuillez vous connecter</p>
        @endguest

explication :

    . @auth ==> utilisateur connecté

    . @guest ==> utilisateur Non connecté

🧩 En résumé

| Blade     | Signification        |
| --------- | -------------------- |
| `@if`     | si                   |
| `@else`   | sinon                |
| `@elseif` | sinon si             |
| `@isset`  | si existe            |
| `@empty`  | si vide              |
| `@unless` | si ce n’est PAS vrai |
| `@auth`   | si connecté          |
| `@guest`  | si pas connecté      |


5. Les Boucles

Rappel : une boucle sert à dire :  " répète la même chose plusieurs fois "

🔁 La boucle la plus utilisée : @foreach

exemple : 

        @foreach($users as $user)
            <p>{{ $user->name }}</p>
        @endforeach

👉 traduction : pour chaque utilisateur dans la liste des utilisateurs, j'affiche son nom

explication :

    . $users ==> la liste des utilisateurs

    . $user ==> un utilisateur (un élément de la liste)

❌ Quand la liste est vide : @forelse

exemple : 

        @forelse($products as $product)
            <p>{{ $product->name }}</p>
        @empty
            <p>Aucun produit</p>
        @endforelse

👉 traduction : 

    . si il y a des produits, je les affiche

    . sinon, j'affiche "aucun produit"

👉 Très pratique pour éviter les erreurs.


🔢 Répéter un nombre précis de fois : @for

exemple : 

        @for($i = 1; $i <= 5; $i++)
            <p>Tour numéro {{ $i }}</p>
        @endfor

👉 traduction :

    . répète 5 fois et affiche le numéro du tour


⏪ Tant qu’une condition est vraie : @while

exemple : 

        @while($score < 100)
            <p>Score : {{ $score }}</p>
        @endwhile

👉 Traduction :

    . tant que le score est inférieur à 100, on continue

⚠️ Attention : la condition doit changer, sinon boucle infinie.


🧩 Infos utiles dans @foreach : $loop

Blade te donne des infos automatiques sur la boucle.

exemple : 

        @foreach($users as $user)
            <p>
                {{ $loop->iteration }} - {{ $user->name }}
            </p>
        @endforeach

Quelques propriétés utiles :

    . $loop->first → premier élément

    . $loop->last → dernier élément

    . $loop->iteration → numéro (1, 2, 3…)

    . $loop->count → nombre total 


🧠 Exemple concret (liste HTML)

code :

        <ul>
        @foreach($tasks as $task)
            <li>{{ $task }}</li>
        @endforeach
        </ul>

👉 Résultat :

    . Une liste <li> générée automatiquement à partir des tâches.


🧩 Résumé


| Boucle     | Quand l’utiliser    |
| ---------- | ------------------- |
| `@foreach` | parcourir une liste |
| `@forelse` | liste + cas vide    |
| `@for`     | répéter X fois      |
| `@while`   | tant que vrai       |
| `$loop`    | infos sur la boucle |


💡 Conseil important

Dans Blade, on affiche des données.
La logique compliquée doit rester dans le controller, pas dans la vue.

6. Controller + Blade




