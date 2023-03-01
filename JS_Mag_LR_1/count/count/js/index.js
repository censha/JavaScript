let plusNode = document.querySelector('#plus');
let amountNode = document.querySelector('#amount');
let minusNode = document.querySelector('#minus');

let count = 0;
amountNode.innerHTML = count;
function amount(tms){
    if(tms) count++;
    else if(count > 0) count--;
    amountNode.innerHTML = count;
}

plusNode.addEventListener('click', function (){
   amount(true);
})
minusNode.addEventListener('click', function (){
    amount(false);
})
