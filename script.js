//Global Variables
    const operators = ["+","-","/","*"];
    let displayed = "";
    let calculatedTotal = 0;

//Initial event listener
function onClick(button){
    if (operators.includes(button)){
        displayed += ` ${button} `;
        return document.getElementById("display").innerHTML = displayed;
    } else if (button == "=") {
        return equals();
    } else if (button == "C"){
        return clear();
    } else {
        calculatedTotal = button;
        displayed += `${button}`;
        return document.getElementById("display").innerHTML = displayed;
    }
}

function equals(){
    return document.getElementById("display").innerHTML = calculatedTotal;
}

function clear(){
    displayed = "";
    calculatedTotal = 0;
    return document.getElementById("display").innerHTML = "";
}

// Notes To Self
/* store separate variable in ALL but operator of if statement
    this will NOT be the display variable
    screw it just re-read the prompt
*/
