//Event Propagation

/*
window.addEventListener  ("click", function () { 
    console.log ("window");
},true);

document.addEventListener ("click", function () {
    console.log ("document");
}, true);

document.querySelector('.div-2').addEventListener("click", function (e) { 
    // e.stopPropagation ();  ---> opreste de tot
    console.log ("Div 2");
}, {once: true});


document.querySelector (".div-1").addEventListener("click", function () {
    console.log ("Div 1");
},true);

document.querySelector("button").addEventListener ("click", function (e) {
    console.log (e.target.innerText = 'clicked'); // e - obiectul pentru eveniment
}, true); */

//-----
window.addEventListener  ("click", function () { 
    console.log ("window");
},false);

document.addEventListener ("click", function () {
    console.log ("document");
}, false);

document.querySelector('.div-2').addEventListener("click", function () { 
    console.log ("Div 2");
}, {once: true});


document.querySelector (".div-1").addEventListener("click", function () {
    console.log ("Div 1");
},false);

document.querySelector("button").addEventListener ("click", function (e) {
    console.log (e.target.innerText = 'clicked'); // e - obiectul pentru eveniment
}, false);

//Daca e fals - propagarea se face de la obiect la sursa
//Daca e adevarat - propagarea se face in ordinea dorita   
//e.stopPropagation () - in ambele sensuri 


//PREVENT DEFAULT METHOD - ex. for anchor tag
document.querySelector(".btn-default").addEventListener ("click", function (e) { 
    e.preventDefault ();
    console.log (e.target.innerText = "clicked-1");
})