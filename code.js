//Eevent listener

//element.addEventListener ('click', function)

const buttonTwo = document.querySelector ('.button2');

function bTN () { 
    alert ('I alsa love JS');
};

buttonTwo.addEventListener ("click", bTN);

//mouseover

/* let newBackgroundColor = document.querySelector('.button3'); */
/* console.log(newBackgroundColor); */
/*  */
/* function changeBGcolor () { */
/*     newBackgroundColor.style.backgroungColor = 'blue'; */
/* } */
/*  */
/* newBackgroundColor.addEventListener ("mouseover", changeBGcolor);  */

let newBackgroundColor = document.querySelector ('.button3');
console.log (newBackgroundColor);

function changeBgColor () { 
    newBackgroundColor.style.backgroundColor = 'red';
};

newBackgroundColor.addEventListener ('mouseover', changeBgColor);

//Show content 
const hiddenContent =  document.querySelector (".hidden-content");
console.log (hiddenContent);

const revealBtn = document.querySelector (".reveal-btn");
console.log (revealBtn);

function revealContent () { 
    if (hiddenContent.classList.contains ('reveal-btn')) 
    {
        hiddenContent.classList.remove('reveal-btn');
    }
    else 
    {
        hiddenContent.classList.add('reveal-btn');
    }
};

revealBtn.addEventListener ('click', revealContent);    

/*  function seeClass ()  { 
    console.log (hiddenContent.classList.contains(".reveal-btn"));
};

revealBtn.addEventListener ('click', seeClass);     */