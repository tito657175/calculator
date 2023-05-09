//Global Variables
const operators = ["+","-","/","*"];
let firstOperator = null;
let displayed = "";
let arrayNumbers = [];
let firstNumber = null;
let secondNumber = null;
let total = null;
let incorrectStartPrompt = "Type a number first ya fu!";
const displayElement = document.getElementById("display");

//Initial event listener
function onClick(button){
    if (operators.includes(button)){
        displayed += ` ${button} `;
        displayElement.innerHTML = displayed;
        selectOperator(button);
    } else if (button == "=") {
        equals();
    } else if (button == "C"){
        clear();
    } else {
        number(button);
    }
}

function number(numberButton){
    if(total == firstNumber){
        //if number is selected after total is displayed
        firstNumber = button;
    }
    arrayNumbers.push(numberButton);
    displayed += `${numberButton}`;
    displayElement.innerHTML = displayed;
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

function selectOperator(operatorButton){

        if (operatorButton == "+"){ 
        if (firstNumber == 'empty'){
            firstNumber = parseInt(arrayNumbers.join(''))
            arrayNumbers = [];
        } else {
        secondNumber = parseInt(arrayNumbers.join(''))
        total = firstNumber + secondNumber;
        firstNumber = total;
        arrayNumbers = [];
        }

        } else if (operatorButton == "-"){
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

/* come back later to completely rework code
goal is to make the calculations work as follows

1. button = first numbers
    //for step 5 in case type number after total
    if total = firstNumber
        firstNumber = button
        display update
    // for first operator ever
    if operator (firstOperator == null)
        return (do nothing)

2. button = first operator
        if secondNumber  == null
            skip calculate()
        button = first operator

3. button = second numbers
    if button = operator
        skips calculation() cuz second still = null
        button = first operator (replace existing operator on display)

4. choices (now have first, operator, second)(calculate totals)
    if operator,
        calculate(a,firstOperator,b)
            total = first number (first operator) second number
        firstNumber = total
        button = firstOperator (replace to new firstOperator)

    if equals,
        calculate total
            select which operator function to use
                total = first number (first operator) second number
        firstNumber = total
        first operator = null
        secondNumber = null
       *** display = firstNumber (no longer running total)
    
5.(NOT HAVE TOTAL HERE)
    if number
        due 3. button = secondNumber

    if operator
        due 2. button = first operator
            replaces previous operator type
6. revert to 
    4. choices
        repeat the loop as needed
*/