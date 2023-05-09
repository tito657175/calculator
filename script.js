//Global Variables
const operators = ["+","-","/","*"];
let displayed = "";
let arrayNumbers = [];
let secondNumber = 0;
let incorrectStartPrompt = "Type a number first ya fu!";
let firstNumber = 'empty';
const displayElement = document.getElementById("display");
let total = 0;

//Initial event listener
function onClick(button){
// Any Operator button
if (operators.includes(button)){
    if (displayed == ""){
        return displayElement.innerHTML = incorrectStartPrompt;
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
        return displayElement.innerHTML = displayed;
    }
}

function equals(){
    secondNumber = firstNumber + parseInt(arrayNumbers.join(''));
    displayElement.innerHTML = secondNumber;
    displayed = "";
    arrayNumbers = [];
    secondNumber = 0;
    firstNumber = 0;
}

function clear(){
    displayed = "";
    arrayNumbers = [];
    secondNumber = 0;
    firstNumber = 0;
    return displayElement.innerHTML = displayed;
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
    total = firstNumber - secondNumber;
    firstNumber = total;
    arrayNumbers = [];
    }
}
};

function sum(){
    secondNumber += firstNumber;
};

function performOperation(operator){
    if (firstNumber == 'empty'){
        firstNumber = parseInt(arrayNumbers.join(''))
        arrayNumbers = [];
    } else {
    secondNumber = parseInt(arrayNumbers.join(''))
    total = firstNumber - secondNumber;
    firstNumber = total;
    arrayNumbers = [];
    }
}
