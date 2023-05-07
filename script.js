//Global Variables
    const operators = ["+","-","/","*"];
    let displayed = "";
    let calculatedTotal = 0;
    let incorrectStartPrompt = "Type a number first ya fu!";

//Initial event listener
function onClick(button){
    if (operators.includes(button)){
        if (displayed == ""){
            return document.getElementById("display").innerHTML = incorrectStartPrompt;
        } else {
        selectOperator(button)
       // displayed += ` ${button} `;
        // return document.getElementById("display").innerHTML = displayed;
        }
    } else if (button == "=") {
        equals();
    } else if (button == "C"){
        clear();
    } else {
        calculatedTotal = button;
        displayed += `${button}`;
        return document.getElementById("display").innerHTML 
        = displayed;
    }
}

function equals(){
    return document.getElementById("display").innerHTML 
    = calculatedTotal;
}

function clear(){
    displayed = "";
    calculatedTotal = 0;
    return document.getElementById("display").innerHTML = "";
}

function selectOperator(operator){
    if (operator == "+"){
        console.log("sum");
    } else if (operator == "-"){
        console.log('minus');
    } else if (operator == "/"){
        console.log('divide')
    } else if (operator == "*"){
        console.log('multiply')
    }
};


// Notes To Self
/* store separate variable in ALL but operator of if statement
    this will NOT be the display variable
    screw it just re-read the prompt
*/
