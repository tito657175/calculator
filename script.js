//Global Variables
const operators = ["+","-","/","*"];
let displayed = "";
let arrayNumbers = [];
let secondNumber = 0;
let incorrectStartPrompt = "Type a number first ya fu!";
let firstNumber = 0;
const displayElement = document.getElementById("display");

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
    secondNumber = parseInt(arrayNumbers.join(''))
    if (firstNumber != secondNumber){
        sum();
        firstNumber = secondNumber;
        arrayNumbers = [];
    } else {
        sum();
    }
} else if (operator == "-"){
    secondNumber = parseInt(arrayNumbers.join(''))
        minus();
        firstNumber = secondNumber;
        arrayNumbers = [];
} else if (operator == "/"){
    console.log('divide')
} else if (operator == "*"){
    console.log('multiply')
}
};

function sum(){
    secondNumber += firstNumber;
};

function minus(){
    firstNumber = -firstNumber;
    secondNumber += firstNumber;
}