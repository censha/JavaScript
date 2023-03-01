let minusNode = document.querySelector(`#minus`);
let starNode = document.querySelector(`#star`);
let spaceNode = document.querySelector(`#space`);
let clearNode = document.querySelector(`#clear`);
let textNode = document.querySelector(`#text`);
let answerNode = document.querySelector(`#answer`);

minusNode.addEventListener('click', function (){
    textNode.innerHTML += '-';
})
starNode.addEventListener('click', function (){
    textNode.innerHTML += '*';
})
spaceNode.addEventListener('click', function (){
    textNode.innerHTML += ' ';
})
clearNode.addEventListener('click', function (){
    textNode.innerHTML = '';
})
answerNode.addEventListener('click', function (){
    textNode.innerHTML = '*--* *-* ** *-- * - *-*-*- -- ** *-* --*--';
    document.querySelector(`#text_a`).innerHTML = '<br>ПРИВЕТ,МИР!';
})
