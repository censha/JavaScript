let divDragonNode=document.querySelector(`#dragon`);
let divTextNode=document.querySelector(`#health`);
let dranoLive = 50;
let numberClick = 1;

divDragonNode.addEventListener(`click`, function()
{

    if(numberClick == 1)
    {
        dranoLive -= 1;
    }
    else if(numberClick == 2)
    {
        dranoLive -= 3;
    }
    else{
        dranoLive -= 3;
    }
    numberClick += 1;
    divTextNode.innerHTML=`hp `+ dranoLive;

    if(dranoLive<=0)
    {
        divDragonNode.innerHTML= `<img class="wheel" src="assets/dragon-fruit.png" alt="" id="enemy" />`;
        divTextNode.innerHTML=`саля маликум`;
    }
});
