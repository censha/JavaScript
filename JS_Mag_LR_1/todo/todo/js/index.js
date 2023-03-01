let hidenNode= document.querySelector(`#hide`)
let clicNode= document.querySelector(`#click`)
let textNode= document.querySelector(`#text`)

clicNode.addEventListener(`click`, function() 
{
    hidenNode.innerHTML='Hooray!';
})