//Event delegation

// @@@--> Modul cu propagare
/* document.querySelector ('#film-1').addEventListener ("click", function (e) {
    console.log ("Spider Man 3");

    const target = e.target;

    if (target.matches ("li")) { 
        target.style.backgroundColor = "lightgrey";
    }
})

document.querySelector ('#film-2').addEventListener ("click", function (e) {
    console.log ("Iron Man 2");

    const target = e.target;
    
    if (target.matches ("li")) { 
        target.style.backgroundColor = "lightgrey";
    }
})

document.querySelector ('#film-3').addEventListener ("click", function (e) {
    console.log ("Peaky Blinders");

    const target = e.target;
    
    if (target.matches ("li")) { 
        target.style.backgroundColor = "lightgrey";
    }
})

document.querySelector ('#film-4').addEventListener ("click", function (e) {
    console.log ("Triunghiul Mortii");

    const target = e.target;
    
    if (target.matches ("li")) { 
        target.style.backgroundColor = "lightgrey";
    }
}) */

//Nota Personala: e este foarte folosit cand vrei sa modifici elementul din HTML

// @@@--> Event Delegation
//Varianta scurta   
const ul = document.querySelector ("#films");


ul.addEventListener ("click", function(e) { //practic setam un eveniment pentru intreaga lista 
    
    console.log (e.target.getAttribute('id') + ' is clicked');

    const target = e.target;
    if (target.matches('li')) { 
        target.style.backgroundColor = "lightgrey";
    };
});

const newFilms = document.createElement ('li');

//Adaugarea la eveniment a altui obiect
newFilms.innerText = "Titanic";
newFilms.setAttribute ('id', 'film-5');

ul.appendChild (newFilms);  