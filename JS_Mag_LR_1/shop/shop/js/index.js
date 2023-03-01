let apleCountNode=document.querySelector(`#apleCount`);
let aplePriceNode=document.querySelector(`#aplePrise`);

let apleCount=apleCountNode.innerHTML;
let aplePrice=aplePriceNode.innerHTML;

let resNode=document.querySelector(`#res`);
resNode.innerHTML= apleCount * aplePrice;

console.log(apleCount*aplePrice);