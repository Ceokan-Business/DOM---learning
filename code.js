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

//Modifiying atributes and classes
li.setAttribute("class", "films-item");

listItem = document.queeySelectorAll ('li');
for (let i = 0; i<listItem.length; i++) { 
    listItem[i].style.color = 'red';
}

const title = document.querySelector ('#main-heading');
console.log (title.getAttribute('id'));