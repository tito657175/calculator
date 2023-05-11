//Global Variables
const operators = ["+","-","/","*"];
const allNumbers =[0,1,2,3,4,5,6,7,8,9];
let firstOperator = null;
let nextOperator = null;
let displayed = "";
let arrayNumbers = [];
let firstNumber = null;
let secondNumber = null;
let total = null;
let equalsTracker = 0; // keeps track of hen equals is used
let buttonTracker = null;
const displayElement = document.getElementById("display");
const displayCustom = document.getElementById("custom_message");

// All Prompts
const incorrectStartPrompt = "Type A Number First Ya Foo!";
const divideByZeroPrompt = "You Can't Divide By Zero, Ya Foo!";
const doubleClick = 'You Already Clicked That, Ya Double Click Foo'; 

//Initial event listener
function onClick(button){
    //checks for repeats that are not numbers
    if (!allNumbers.includes(button) && button == buttonTracker){
        displayCustom.innerHTML = doubleClick;
        return
    // tracks first new button
    } else if (!allNumbers.includes(button) && buttonTracker == null){
        buttonTracker = button; //logs first non-number
        displayCustom.innerHTML = '';
        taskManager(button);
    //start process unaffected by above
    } else {
        displayCustom.innerHTML = '';
        buttonTracker = null; //clears non-number after number is pressed
        taskManager(button);
    }
}

function taskManager(button){
    if (operators.includes(button)){
        displayed += ` ${button} `;
        displayElement.innerHTML = displayed;
        // if first time selecting operator (1,3,5th etc)
        if(firstOperator == null && secondNumber == null){
            firstNumber = parseInt(arrayNumbers.join(''));
            if (isNaN(firstNumber)){ //can't compare directly NaN
                firstNumber = total; // when equals then operator is used next
            } 
            firstOperator = button;
            arrayNumbers = [];
        } else {
            if(firstOperator !== null && secondNumber == null){
                secondNumber = parseInt(arrayNumbers.join(''));
                if (isNaN(secondNumber)){ //can't compare directly NaN
                    secondNumber = 0; // for case when equals a total is visible and operator is used next
                    displayed += `${secondNumber}`
                } 
                nextOperator = button;
            }
            selectOperator(firstNumber,firstOperator,secondNumber);
            firstOperator = nextOperator;
            nextOperator = null;
            secondNumber = null;
        }
    } else if (button == "=") {equals(button);
    } else if (button == "C"){clear(button);
    } else {number(button);}
}   

function number(numberButton){
    if(equalsTracker >= 1){ //special case for number used after equals
        equalsTracker = 0;
        total = null;
        firstNumber = null;
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
        secondNumber = 0; // in case = operator is used without two number inputs
        displayed += `+ ${secondNumber}`
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
            displayed += divideByZeroPrompt;
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
        buttonTracker = null;
    }
}

