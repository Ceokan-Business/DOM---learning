//Dom Manipulation

//Traverse the DOM

//Parent Node Traversal

/* let ul = document.querySelector('ul');
console.log (ul.parentNode.parentNode);
console.log (ul.parentElement.parentElement); */


    //diferenta dintre Node si Element
/* const html = document.documentElement;
console.log (html.parentNode);
console.log (html.parentElement);  */
    //mai folosit e parentNode

//Child Note Traversal

/* console.log(ul.childNodes); 
console.log (ul.firstChild);
console.log (ul.lastChild); */
    //Spatiile din HTML sunt notate ca si elemente in childNotes
    //E o problema pentru styling

    //ul.firstChild.style.backgroundColor=  'green'; -> error
/* ul.childNodes[1].style.backgroundColor = 'green'; */

    // fara liniile de text din HTML
/* console.log (ul.children); 
console.log (ul.firstElementChild.innerText);
console.log (ul.lastElementChild.innerText); */

//Sibling Note Traversal
const div = document.querySelector('div');
console.log (div.childNodes);


let ul = document.querySelector('ul');
/* console.log (ul.previousSibling);
console.log (ul.nextSibling);   */

    //fara textul din HTML 
console.log (ul.previousElementSibling.innerText);
console.log (ul.nextElementSibling);
