//Global Variables
    const operators = ["+","-","/","*"];
    let displayed = "";
    let calculatedTotal = 0;
    let incorrectStartPrompt = "Type a number first ya fu!";
    const displayElement = document.getElementById("display");

    let temp = 0;

//Initial event listener
function onClick(button){
    if (operators.includes(button)){
        if (displayed == ""){
            return displayElement.innerHTML = incorrectStartPrompt;
        } else {
            displayed += ` ${button} `;
            displayElement.innerHTML = displayed;
            calculatedTotal = parseInt(calculatedTotal);
            selectOperator(button);
        }
    } else if (button == "=") {
        equals();
    } else if (button == "C"){
        clear();
    } else {
        calculatedTotal += `${button}`;
        displayed += `${button}`;
        return displayElement.innerHTML = displayed;
    }
}

function equals(){
    calculatedTotal = temp + parseInt(calculatedTotal);
    displayElement.innerHTML = calculatedTotal;
    displayed = "";
    calculatedTotal = 0;
    temp = 0;
}

function clear(){
    displayed = "";
    calculatedTotal = 0;
    return displayElement.innerHTML = displayed;
}


function selectOperator(operator){
    if (operator == "+"){ 
        if (temp != calculatedTotal){
            sum();
            temp = calculatedTotal;
            calculatedTotal = 0;
        } else {
            sum();
        }
    } else if (operator == "-"){
        console.log('minus');
    } else if (operator == "/"){
        console.log('divide')
    } else if (operator == "*"){
        console.log('multiply')
    }
};

function sum(){
    calculatedTotal = calculatedTotal + temp;
};

// Notes To Self
/* store separate variable in ALL but operator of if statement
    this will NOT be the display variable
    screw it just re-read the prompt
*/
