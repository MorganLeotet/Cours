/* Exercice 1 : Utilisation de Fetch 

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
*/

/* Exemple Complet Ajax + HTML //

let bouton = document.getElementById("charger");
let liste = document.getElementById("list");

bouton.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            liste.innerHTML = "";

            users.forEach(function (user) {
                let li = document.createElement("li");
                li.textContent = user.name;
                liste.appendChild(li);
            });
        })
})
*/

//Exercice 2 : Afficher les titres des posts //

let bouton = document.getElementById("afficher");
let liste = document.getElementById("posts");

bouton.addEventListener("click", function() {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            liste.innerHTML = "";

        posts.forEach(function (post) {
            let li = document.createElement("li");
            li.textContent = post.title;
            liste.appendChild(li);
        });
    });
});
