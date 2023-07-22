const billInput = document.querySelector('#bill-input');
const peopleInput = document.querySelector('#input-people');
const tipPerson = document.querySelector('#tip-amount');
const totalPerson = document.querySelector('#total-amount');
const tips = document.querySelectorAll('.tips');
const tipCustom = document.querySelector('#tip-custom');
const btnReset = document.querySelector('#btnReset');
const eTxtBill = document.querySelector('.error-b');
const eTxtPeople = document.querySelector('.error-p');

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

tipPerson.innerHTML =  "$"+(0.0).toFixed(2);
totalPerson.innerHTML = "$"+(0.0).toFixed(2);

billInput.addEventListener('input',billInputFun);
peopleInput.addEventListener('input',peopleInputFun);
tips.forEach((val) => {val.addEventListener('click',handleClick)});
tipCustom.addEventListener('input',tipInputFun);
btnReset.addEventListener('click',reset);

function billInputFun(){
    billValue = parseFloat(billInput.value);  
    calculateTip();
    if(billValue < 1){
        eTxtBill.style.display = "initial";
        billInput.style.border = '2px solid #d93025'
        billInput.style.outlineColor = "#d93025"
    }else{
        eTxtBill.style.display = "none";
        billInput.style.border = 'none';
        billInput.style.outlineColor = "hsl(172, 67%, 45%)"
        calculateTip();
    }  
}
function peopleInputFun(){
    peopleValue = parseFloat(peopleInput.value);
    calculateTip();    
    if(peopleValue < 1){
        eTxtPeople.style.display = "initial";
        peopleInput.style.border = '2px solid #d93025'
        peopleInput.style.outlineColor = "#d93025"
    }else{
        eTxtPeople.style.display = "none";
        peopleInput.style.border = 'none';
        peopleInput.style.outlineColor = "hsl(172, 67%, 45%)"
        calculateTip();
    }
}  
function handleClick(){
    tips.forEach((val) => {
        val.classList.remove('active-tip');
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add('active-tip')
            tipValue = parseFloat(val.innerHTML)/100;
        }
    });
    calculateTip()
}

function tipInputFun(){
    tipValue = parseFloat(tipCustom.value/100);
    tips.forEach((val) =>{
        val.classList.remove('active-tip');
    })
    calculateTip();
}
function calculateTip(){
    if(peopleValue > 1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue * tipAmount) / peopleValue;
        tipPerson.innerHTML = "$"+(tipAmount).toFixed(2);
        totalPerson.innerHTML = "$"+(total).toFixed(2);
    }
}
function reset(){
    billInput.value = '0.0';
    billInputFun();
    peopleInput.value = '1';
    peopleInputFun();
    tipCustom.value = ''
}