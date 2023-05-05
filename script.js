//Global Variables
    const operators = ["+","-","/","*"];
    let selectedButton = 0;

//Initial event listener
function onClick(button){
    if (operators.includes(button)){
        console.log (`U are using this ${button} operator`);
    } else if (button == "=") {
        return equals();
    } else if (button == "C"){
        return clear();
    } else {
        selectedButton += button;
        return document.getElementById("display").innerHTML = selectedButton;
    }
}

function equals(){
    console.log("equals ya fu");
}

function clear(){
    console.log("clear!")
}
