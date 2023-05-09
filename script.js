//Global Variables
const operators = ["+","-","/","*"];
let oldOperator = null;
let displayed = "";
let arrayNumbers = [];
let firstNumber = 'empty';
let secondNumber = 0;
let total = 0;
let incorrectStartPrompt = "Type a number first ya fu!";
const displayElement = document.getElementById("display");

//Initial event listener
function onClick(button){
// Any Operator button
if (operators.includes(button)){
    if (oldOperator == null){
        oldOperator = button;
    }
        if (displayed == ""){
            displayElement.innerHTML = incorrectStartPrompt;
        } else {
            displayed += ` ${button} `;
            displayElement.innerHTML = displayed;
            selectOperator(button);
        }
        //Equals button
        } else if (button == "=") {
            equals();
        //Clear button
        } else if (button == "C"){
            clear();
        //Any number button
        } else {
            arrayNumbers.push(button);
            displayed += `${button}`;
            displayElement.innerHTML = displayed;
        }
        }

function equals(){
    if (total == 0){
        secondNumber = parseInt(arrayNumbers.join(''));
        total = firstNumber + secondNumber;
    }
    displayElement.innerHTML = total;
    resetDefault();
}

function clear(){
    resetDefault();
    displayElement.innerHTML = displayed;
}

function selectOperator(operator){

if (operator == "+"){ 
    if (firstNumber == 'empty'){
        firstNumber = parseInt(arrayNumbers.join(''))
        arrayNumbers = [];
    } else {
    secondNumber = parseInt(arrayNumbers.join(''))
    total = firstNumber + secondNumber;
    firstNumber = total;
    arrayNumbers = [];
    }

} else if (operator == "-"){
    if (firstNumber == 'empty'){
        firstNumber = parseInt(arrayNumbers.join(''))
        arrayNumbers = [];
    } else {
    secondNumber = parseInt(arrayNumbers.join(''))
    total = firstNumber - secondNumber;
    firstNumber = total;
    arrayNumbers = [];
    }

} else if (operator == "/"){
    if (firstNumber == 'empty'){
        firstNumber = parseInt(arrayNumbers.join(''))
        arrayNumbers = [];
    } else {
    secondNumber = parseInt(arrayNumbers.join(''))
    total = firstNumber / secondNumber;
    firstNumber = total;
    arrayNumbers = [];
    }

} else if (operator == "*"){
    if (firstNumber == 'empty'){
        firstNumber = parseInt(arrayNumbers.join(''))
        arrayNumbers = [];
    } else {
    secondNumber = parseInt(arrayNumbers.join(''))
    total = firstNumber * secondNumber;
    firstNumber = total;
    arrayNumbers = [];
    }
}
};

function resetDefault(){
    displayed = "";
    arrayNumbers = [];
    firstNumber = 'empty';
    secondNumber = 0;
    total = 0;
}