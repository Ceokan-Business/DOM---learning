//getElementByID ()
//getElementByClassName ()
//getElementByTag () 
//querySelector () 
//querySelectorAll ()
let listItem = document.querySelectorAll ('li');
console.log (listItem);

/*  listItem.style.color = 'blue'; - error*/

for (let i = 0; i < listItem.length; i++) { 
    listItem[i].style.color = 'blue';
} /* Done*/

//Creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append (li);

//Modify the text

const firstListItem = document.querySelector ('.films-item');
console.log (firstListItem.innerText); //cel mai folosit
console.log (firstListItem.textContent);
console.log (firstListItem.innerHTML);

li.innerText = "Salutare Jupane!";

//Modificare Text - Preluarea ID ului 
/* li.setAttribute ('id', 'main-heading');
console.log (li.getAttribute ('id'));

listItem = document.querySelectorAll ('li');
for (let i = 0; i <listItem.length; i++) { 
    listItem[i].style.color = 'red';  
} 

li.removeAttribute ('id'); */

//Modificare Text - Preluarea Clasei
li.classList.add ("films-item");
console.log (li.classList.contains('films-item'));

li.classList.remove ("films-item");
console.log (li.classList.contains("films-item"));

//Remove Elements
li.remove ();
