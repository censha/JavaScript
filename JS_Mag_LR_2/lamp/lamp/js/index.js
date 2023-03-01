let buttonOffNode= document.querySelector(`#off`);
let buttonOnNode= document.querySelector(`#on`);
let devLampNode= document.querySelector(`#lamp`);

devLampNode.classList.add(`container`);

buttonOffNode.addEventListener(`click`, function()
{
    devLampNode.classList.add(`dark`);
    devLampNode.classList.add(`opacity-0`);
    devLampNode.innerHTML=` <img class="img img-fluid" src="assets/dark.png"/> `;
   
});

buttonOnNode.addEventListener(`click`, function()
{
    devLampNode.innerHTML=` <img class="img img-fluid" src="assets/light.png"/> `;
    devLampNode.classList.remove(`dark`);
    devLampNode.classList.remove(`opacity-0`);

});

