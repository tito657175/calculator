//Global Variables
const operators = ["+","-","/","*"];
let displayed = "";
let arrayNumbers = [];
let newNumber = 0;
let incorrectStartPrompt = "Type a number first ya fu!";
let oldNumber = 0;
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
    newNumber = oldNumber + parseInt(arrayNumbers.join(''));
    displayElement.innerHTML = newNumber;
    displayed = "";
    arrayNumbers = [];
    newNumber = 0;
    oldNumber = 0;
}

function clear(){
    displayed = "";
    arrayNumbers = [];
    newNumber = 0;
    oldNumber = 0;
    return displayElement.innerHTML = displayed;
}

function selectOperator(operator){
if (operator == "+"){ 
    newNumber = parseInt(arrayNumbers.join(''))
    if (oldNumber != newNumber){
        sum();
        oldNumber = newNumber;
        arrayNumbers = [];
    } else {
        sum();
    }
} else if (operator == "-"){
    newNumber = parseInt(arrayNumbers.join(''))
        minus();
        oldNumber = newNumber;
        arrayNumbers = [];
} else if (operator == "/"){
    console.log('divide')
} else if (operator == "*"){
    console.log('multiply')
}
};

function sum(){
    newNumber += oldNumber;
};

function minus(){
    newNumber -= oldNumber;
}