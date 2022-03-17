// script.js

//basic calculator functions
function add(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber
}

function divide(firstNumber, secondNumber){
    if (secondNumber === 0) {
        return "ERROR"
    } else {
    return firstNumber / secondNumber}
}

//operator function
function operate(operator, firstNumber, secondNumber){
    if (operator === "toAdd"){
        return add(firstNumber, secondNumber)
    }
    else if (operator === "toSubtract"){
        return subtract(firstNumber, secondNumber)
    }
    else if (operator === "toMultiply"){
        return multiply(firstNumber, secondNumber)
    }
    else if (operator === "toDivide"){
        return divide(firstNumber, secondNumber)
    }
}