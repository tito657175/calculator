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
        // if first time selecting operator (1,3,5th etc)
        if(secondNumber == null){
            firstNumber = parseInt(arrayNumbers.join(''));
            firstOperator = button;
            arrayNumbers = [];
        } else {
            if(secondNumber == null){
                secondNumber = parseInt(arrayNumbers.join(''));
            }
            selectOperator(firstNumber,firstOperator,secondNumber);
        }
    } else if (button == "=") {
        equals();
    } else if (button == "C"){
        clear();
    } else {
        number(button);
    }
}

function number(numberButton){
    arrayNumbers.push(numberButton);
    displayed += `${numberButton}`;
    displayElement.innerHTML = displayed;

    if(firstOperator == null){
        return;
    }
}

function equals(){
    if (total == null){
        secondNumber = parseInt(arrayNumbers.join(''));
        total = selectOperator(firstNumber,firstOperator,secondNumber);
    }
    resetDefault(total);
    displayElement.innerHTML = total;
}

function clear(){
    resetDefault('');
    displayElement.innerHTML = displayed;
}

function selectOperator(a,operatorButton,b){
    if (operatorButton == "+"){ 
        total = firstNumber + secondNumber;
        firstNumber = total;
        arrayNumbers = [];

    } else if (operatorButton == "-"){
        total = firstNumber - secondNumber;
        firstNumber = total;
        arrayNumbers = [];

    } else if (operatorButton == "/"){
        if (secondNumber == 0){
            displayed = `You Can't Divide by Zero, Ya FU!`;
            displayElement.innerHTML = displayed;
        } else {
        total = firstNumber / secondNumber;
        firstNumber = total;
        arrayNumbers = [];
        }
    } else if (operatorButton == "*"){
        total = firstNumber * secondNumber;
        firstNumber = total;
        arrayNumbers = [];   
    }
};

function resetDefault(localTotal){
    displayed = localTotal;
    arrayNumbers = [];
    firstNumber = null;
    secondNumber = null;
    total = null;
}

/* come back later to completely rework code
goal is to make the calculations work as follows

1. button = first numbers
    //for step 5 in case type number after total
    if total = firstNumber
        firstNumber = button
        display update
        **maybe array reset
    // for first operator ever
    *** (skipped)if operator (firstOperator == null)
        return (do nothing)

2. first operator
        if secondNumber  == null
            skip calculate()
        button = first operator

3. Button = second numbers
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