//Global Variables
    const operators = ["+","-","/","*"];
    let displayed = "";
    let arrayIntTotal = [];
    let longNumber = 0;
    let incorrectStartPrompt = "Type a number first ya fu!";
    const displayElement = document.getElementById("display");

    let temp = 0;

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
        arrayIntTotal.push(button);
        displayed += `${button}`;
        return displayElement.innerHTML = displayed;
    }
}

function equals(){
    longNumber = temp + parseInt(arrayIntTotal.join(''));
    displayElement.innerHTML = longNumber;
    displayed = "";
    arrayIntTotal = [];
    longNumber = 0;
    temp = 0;
}

function clear(){
    displayed = "";
    arrayIntTotal = [];
    longNumber = 0;
    temp = 0;
    return displayElement.innerHTML = displayed;
}

function selectOperator(operator){
    if (operator == "+"){ 
        if (temp != parseInt(arrayIntTotal.join(''))){
            longNumber = parseInt(arrayIntTotal.join(''));
            sum();
            temp = longNumber;
            arrayIntTotal = [];
        } else {
            sum();
        }
    } else if (operator == "-"){
        if (temp != parseInt(arrayIntTotal.join(''))){
            longNumber = parseInt(arrayIntTotal.join(''));
            minus();
            temp = longNumber;
            arrayIntTotal = [];
        } else {
            minus();
        }
    } else if (operator == "/"){
        console.log('divide')
    } else if (operator == "*"){
        console.log('multiply')
    }
};

function sum(){
    longNumber = longNumber + temp;
};

function minus(){
    longNumber = longNumber - temp;
}

