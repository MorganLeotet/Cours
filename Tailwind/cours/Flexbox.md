# Flexbox avec Tailwind (bases)

## Transformer un conteneur en flex

Exemple :

<div class="flex">
  <div class="bg-red-400 p-4">Bloc 1</div>
  <div class="bg-green-400 p-4">Bloc 2</div>
  <div class="bg-blue-400 p-4">Bloc 3</div>
</div>

Résultat : 
    . Les trois blocs sont sur la même ligne
    . l'espace entre eux est minime


## Justifier et aligner

    - justify (horizontal) :

        . justify-start ==> aligné à gauche
        . justify-center ==> centré
        . justify-end ==> aligné à droite
        . justify-between ==> espace maximum entre les éléments
        . justify-around ==> espace autour

    - Items (vertical) :

        . items-start ==> en haut
        . items-center ==> centré verticalement
        . items-end ==> en bas

Retour à l'exemple :

<div class="flex justify-center items-center h-40 bg-gray-200">
  <div class="bg-red-400 p-4">Bloc 1</div>
  <div class="bg-green-400 p-4">Bloc 2</div>
  <div class="bg-blue-400 p-4">Bloc 3</div>
</div>

    . h_40 : hauteur de 10rem, pour bien voir l'alignement vertical


    - Flex-direction (ordres des blocs)

        . flex-row ==> horizontal (par défaut)
        . flex-col ==> vertical

Retour à l'exemple :

<div class="flex flex-col">
  <div class="bg-red-400 p-4">Bloc 1</div>
  <div class="bg-green-400 p-4">Bloc 2</div>
  <div class="bg-blue-400 p-4">Bloc 3</div>
</div>

    . flex-col : tous les blocs aligner à la verticale


    - Espacement entre les blocs

Au lieu d'utiliser "m-..." sur chaque bloc, Tailwind a une classe pratique :

    . gap-4 ==> espace uniforme entre tous les blocs

Retour à l'exemple

<div class="flex gap-4">
  <div class="bg-red-400 p-4">Bloc 1</div>
  <div class="bg-green-400 p-4">Bloc 2</div>
  <div class="bg-blue-400 p-4">Bloc 3</div>
</div>

    . gap-4 : les blocs sont alignés à l'horizontal avec un espace entre eux


