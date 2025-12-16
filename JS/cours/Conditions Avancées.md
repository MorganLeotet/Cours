# Les Conditions avancées et Opérateurs logiques

1. Opérateur AND : &&

*Signifie : ET

*La condition est vraie si les deux sont vraies

Exemple:

let age = 20

let permis = true

if (age >= 18 && permis === true ) {
    console.log(' tu peux conduire ')
}

*Si une des deux consitions est fausse => tout est faux

2. Opérateur OR : ||

*Signifie : OU

*La condition est vraie si au moins une est vraie

Exemple:

let jour = 'samedi' 

if (jour === 'samedi' || jour === 'dimanche ) {
    console.log( 'c'est le week-end ')
}

3. Opérateur NOT : !

*Sert à dire le contraire

Exemple:

let connecté = false

if (!connecté ) {
    console.log(' t'es pas connecté ')
}

*!false devient true

4. Opérateur ternaire : condition en une seule ligne

*version courte de if/else

Exemple:

let age = 16

let message = age >= 18 ? 'majeur' : 'mineur'

console.log(message)