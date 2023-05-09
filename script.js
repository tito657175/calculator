//Global Variables
const operators = ["+","-","/","*"];
let displayed = "";
let arrayNumbers = [];
let firstNumber = null;
let secondNumber = 0;
let total = 0;
let oldOperator = null;
let newOperator = null;
let incorrectStartPrompt = "Type a number first ya fu!";
const displayElement = document.getElementById("display");

//Initial event listener
function onClick(button){
// Any Operator button
if (operators.includes(button)){
    if (displayed == ""){
        displayElement.innerHTML = incorrectStartPrompt;
    } else if (oldOperator === null){
        oldOperator = button;
        displayed += ` ${button} `;
        displayElement.innerHTML = displayed;
    } else {
        if (newOperator != null){
            if(button !== newOperator){
                selectOperator(firstNumber,newOperator,secondNumber);
            } else {
                selectOperator(firstNumber,button,secondNumber);
            }
            displayed += ` ${button} `;
            displayElement.innerHTML = displayed;
            oldOperator = null;
            newOperator = button;
        } else {
        displayed += ` ${button} `;
        displayElement.innerHTML = displayed;
        selectOperator(firstNumber,oldOperator,secondNumber);
        oldOperator = null;
        newOperator = button;
        }
    }
    //Equals button
    } else if (button == "=") {
        equals();
    //Clear button
    } else if (button == "C"){
        clear();
    //Any number button
    } else {
        if(newOperator == null && firstNumber==null){
            firstNumber = parseInt(arrayNumbers.join(''));
            arrayNumbers = [];
        }
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

function selectOperator(a,operator,b){
if (operator === "+"){ 
    if (a == null){
        firstNumber = parseInt(arrayNumbers.join(''))
        arrayNumbers = [];
    } else {
    b = parseInt(arrayNumbers.join(''))
    total = a + b;
    secondNumber = b;
    firstNumber = total;
    arrayNumbers = [];
    }

} else if (operator === "-"){
    if (firstNumber == null){
        firstNumber = parseInt(arrayNumbers.join(''))
        arrayNumbers = [];
    } else {
    secondNumber = parseInt(arrayNumbers.join(''))
    total = firstNumber - secondNumber;
    firstNumber = total;
    arrayNumbers = [];
    }

} else if (operator === "/"){
    if (firstNumber == null){
        firstNumber = parseInt(arrayNumbers.join(''))
        arrayNumbers = [];
    } else {
    secondNumber = parseInt(arrayNumbers.join(''))
    total = firstNumber / secondNumber;
    firstNumber = total;
    arrayNumbers = [];
    }

} else if (operator === "*"){
    if (firstNumber == null){
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
    firstNumber = null;
    secondNumber = 0;
    total = 0;
    newOperator = null;
    oldOperator = null;
}