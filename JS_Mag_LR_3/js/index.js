let summa = 0;
let number = document.getElementById('number');
let emailNode = document.getElementById('email');
let button = document.getElementsByName('place');
let formbooking = document.getElementById('form_booking');
let formpayment = document.getElementById('form_payment');
let choiceNode = document.getElementById('choice_btn');
formbooking.style.display = 'none';
formpayment.style.display = 'none';
choiceNode.style.display = 'none';

document.getElementsByName('date')[0].addEventListener('click', function (){

    if(document.getElementsByName('date')[0].value){
        document.getElementById('film').style.display = 'block';
    }
    else {
        document.getElementById('film').style.display = 'none';
        document.getElementById('time').style.display = 'none';
    }
})

document.getElementsByName('film')[0].addEventListener('click', function (){
    if(document.getElementsByName('film')[0].value){
        document.getElementById('time').style.display = 'block';
    }
    else {
        document.getElementById('time').style.display = 'none';
    }
})
document.getElementsByName('time')[0].addEventListener('click', function (){
    if(document.getElementsByName('date')[0].value == '27')
    {
        let arr = [];
        if(document.getElementsByName('film')[0].value == 1 && document.getElementsByName('time')[0].value == 1){
            arr = [2,3,5,6];
        }
        if(document.getElementsByName('film')[0].value == 2 && document.getElementsByName('time')[0].value == 2){
            arr = [2,3,5,6];
        }
        if(document.getElementsByName('film')[0].value == 3 && document.getElementsByName('time')[0].value == 1){
            arr = [1,3,4,9];
        }
        if(document.getElementsByName('film')[0].value == 1 && document.getElementsByName('time')[0].value == 3){
            arr = [1, 3, 4, 5, 7, 9];
        }
        arr.forEach(item => {
            document.getElementsByName('place')[item].classList.toggle('bg-secondary');
            document.getElementsByName('place')[item].disabled = true;
        })
        if(arr.length === 0){
            btncreate();
        }
    }
    else btncreate();
})

document.getElementById('payment').addEventListener('click', function (){
    if(formpayment.style.display === 'none')
        if(formbooking.style.display = 'block'){
            formbooking.style.display = 'none'
            formpayment.style.display = 'block'
        }else formpayment.style.display = 'block';
    else formpayment.style.display = 'none';
})

document.getElementById('booking').addEventListener('click', function (){
    if(formbooking.style.display === 'none')
        if(formpayment.style.display = 'block'){
            formpayment.style.display = 'none';
            formbooking.style.display = 'block'
        }else formbooking.style.display = 'block';
    else formbooking.style.display = 'none';
})

 function youFunc(btn){
     btn.classList.toggle('bg-danger');
     amount_of_payments(Math.ceil(btn.id/4));
 }

 function amount_of_payments(sum){
     if(sum === 3)
         summa += 400;
     if(sum === 2)
         summa += 500;
     if(sum === 1)
         summa += 600;
     document.getElementById('amount').innerHTML = 'Сумма к оплате составляет ' + summa + ' рубасов';
     document.getElementById('amount_final').innerHTML = 'Сумма к оплате составляет ' + summa + ' рубасов';
 }

 document.getElementById('del').addEventListener('click', function () {
     document.getElementById('amount').innerHTML = '';
     formbooking.style.display = 'none';
     formpayment.style.display = 'none';
     choiceNode.style.display = 'none';
 })

document.getElementById('choice').addEventListener('click', function () {
    if(summa > 0)
    choiceNode.style.display = 'block';
 })

function btncreate() {
    button.forEach(btn => {
        btn.classList.toggle('bg-primary');
        btn.disabled = false;
        btn.addEventListener('click', () => youFunc(btn));
    })
}

document.addEventListener("DOMContentLoaded", function (){
    btncreate();
})


document.getElementById('book').addEventListener('click', function (){
    let phone = number.value;
    if(!isTelValid()){
        document.getElementById('number_span').innerHTML += 'Мобильный телефон введен не верно';
    }
    if (!isEmailValid()){
        document.getElementById('email_span').innerHTML += 'Почта введена не верно';
    }
})

function isTelValid(value){
    const tel_reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    let phone = number.value;
    return tel_reg.test(phone)
}
function isEmailValid(){
    const email_reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    let email = emailNode.value;
    return email_reg.test(email)
}










