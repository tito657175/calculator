//Global Variables
const operators = ["+","-","/","*"];
const otherButtons =['=','C'];
let firstOperator = null;
let nextOperator = null;
let displayed = "";
let arrayNumbers = [];
let firstNumber = null;
let secondNumber = null;
let total = null;
let equalsTracker = 0; // keeps track of hen equals is used
let newButton = null;
let incorrectStartPrompt = "Type a number first ya fu!";
const displayElement = document.getElementById("display");

//Initial event listener
function onClick(sortedButton){
    //to use change onClick(button)
    //let sortedButton = buttonRepeats(button);

    if (operators.includes(sortedButton)){
        displayed += ` ${sortedButton} `;
        displayElement.innerHTML = displayed;
        // if first time selecting operator (1,3,5th etc)
        if(firstOperator == null && secondNumber == null){
            firstNumber = parseInt(arrayNumbers.join(''));
            if (isNaN(firstNumber)){ //can't compare directly NaN
                firstNumber = total; // for case when equals a total is visible and operator is used next
            } 
            firstOperator = sortedButton;
            arrayNumbers = [];
        } else {
            if(firstOperator !== null && secondNumber == null){
                secondNumber = parseInt(arrayNumbers.join(''));
                if (isNaN(secondNumber)){ //can't compare directly NaN
                    secondNumber = 0; // for case when equals a total is visible and operator is used next
                    displayed += `${secondNumber}`
                } 
                nextOperator = sortedButton;
            }
            selectOperator(firstNumber,firstOperator,secondNumber);
            firstOperator = nextOperator;
            nextOperator = null;
            secondNumber = null;
        }
    } else if (sortedButton == "=") {
        equals(sortedButton);
    } else if (sortedButton == "C"){
        clear(sortedButton);
    // } else if ((sortedButton == "nope")){
       // return;
    } else {
        number(sortedButton);
    } 
}

function number(numberButton){
    if(equalsTracker >= 1){ //special case for number used after equals
        equalsTracker = 0;
        total = null;
        arrayNumbers.push(numberButton);
        displayed = `${numberButton}`;
        displayElement.innerHTML = displayed;
    } else {
        arrayNumbers.push(numberButton);
        displayed += `${numberButton}`;
        displayElement.innerHTML = displayed;
    }
}

function equals(equalsButton){
    secondNumber = parseInt(arrayNumbers.join(''));
    if (isNaN(secondNumber)){
        secondNumber = 0; // so that if equals + operator + = is used it adds 0 after automatically
        displayed += `${secondNumber}`
    } 
    selectOperator(firstNumber,firstOperator,secondNumber);
    resetDefault(equalsButton);
    //Keep running total
    displayElement.innerHTML = displayed;
}

function clear(clearButton){
    resetDefault(clearButton);
    //HARD RESET
    total = null;
    displayElement.innerHTML = displayed;
}

function selectOperator(a,operatorButton,b){
    if (operatorButton == "+"){ 
        let result = firstNumber + secondNumber;
        firstNumber = result;
        arrayNumbers = [];

    } else if (operatorButton == "-"){
        let result = firstNumber - secondNumber;
        firstNumber = result;
        arrayNumbers = [];

    } else if (operatorButton == "/"){
        if (secondNumber == 0){
            displayed += `You Can't Divide By Zero, Ya Foo!`;
            displayElement.innerHTML = displayed;
        } else {
        let result = firstNumber / secondNumber;
        firstNumber = result;
        arrayNumbers = [];
        }
    } else if (operatorButton == "*"){
        let result = firstNumber * secondNumber;
        firstNumber = result;
        arrayNumbers = []; 
    }
    total = firstNumber;
    equalsTracker = 0; //special case for a+b+.. = total + (this)
};

function resetDefault(button){
    if (button == "="){
        displayed += `= ${total}`;
        arrayNumbers = [];
        secondNumber = null;
        firstOperator = null;
        secondOperator = null;
        equalsTracker++;
    } else if(button == "C"){
        //Hard Reset
        displayed = "";
        arrayNumbers = [];
        firstNumber = null;
        secondNumber = null;
        firstOperator = null;
        secondOperator = null;
        total = null;
        equalsTracker = 0;
        newButton = null;
    }
    
}

// NOT using anymore cuz sucks
function buttonRepeats(currentButton){ //checks for button repeats
    if (newButton = null){
            newButton = currentButton;
            return currentButton;
     } else if (newButton == currentButton && 
            operators.includes(currentButton) &&
            otherButtons.includes(currentButton)){
            newButton = currentButton;
            return currentButton = "nope";
    } else return currentButton;
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


BUTTON REPEATS
    store first input
        if newButton = null;
            newButton = button
        else if (newButton == button){
            return
        }

*/

