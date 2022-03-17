// script.js

//initializing values
var displayValue = "0"
var firstValue
var secondValue = "0"
var operand
var storageDisplay = "0"

//getting calculator display
const display = document.querySelector("#display")

//display change function
function changingDisplay(){
    storageValue = displayValue
    display.textContent = storageValue
}

//clear button
const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    displayValue = "0"
    firstValue = "0"
    secondValue = "0"
    changingDisplay()
})

//getting keypad actions
const digits = document.querySelectorAll(".digits")
const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")

//button functions
zero.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "0"
    : displayValue = displayValue.concat("0")
    changingDisplay()
})

one.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "1"
    : displayValue = displayValue.concat("1")
    changingDisplay()
})

two.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "2"
    : displayValue = displayValue.concat("2")
    changingDisplay()
})

three.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "3"
    : displayValue = displayValue.concat("3")
    changingDisplay()
})

four.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "4"
    : displayValue = displayValue.concat("4")
    changingDisplay()
})

five.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "5"
    : displayValue = displayValue.concat("5")
    changingDisplay()
})

six.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "6"
    : displayValue = displayValue.concat("6")
    changingDisplay()
})

seven.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "7"
    : displayValue = displayValue.concat("7")
    changingDisplay()
})

eight.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "8"
    : displayValue = displayValue.concat("8")
    changingDisplay()
})

nine.addEventListener("click", ()=>{
    displayValue === "0"
    ? displayValue = "9"
    : displayValue = displayValue.concat("9")
    changingDisplay()
})

//getting operand buttons
const addingNumbers = document.querySelector("#add")
const subtractingNumbers = document.querySelector("#subtract")
const multiplyingNumbers = document.querySelector("#multiply")
const dividingNumbers = document.querySelector("#divide")

//operand functions
addingNumbers.addEventListener("click", () => {
    storingValues()
    operand = "toAdd"
    return(operand, firstValue)
})

subtractingNumbers.addEventListener("click", () => {
    storingValues()
    operand = "toSubtract"
    return(operand, firstValue)
})

multiplyingNumbers.addEventListener("click", () => {
    storingValues()
    operand = "toMultiply"
    return(operand, firstValue)
})

dividingNumbers.addEventListener("click", () => {
    storingValues()
    operand = "toDivide"
    return(operand, firstValue) 
})

//equals function
const equalto = document.querySelector("#equals")
equalto.addEventListener("click", () => {
    secondValue = parseInt(displayValue)
    displayValue = operate(operand, firstValue, secondValue)
    console.log(displayValue)
    changingDisplay()
})

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
        alert("The universe doesn't allow you to divide by 0!")
        return "0"
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

//storing values
function storingValues (value){
    value = displayValue
    firstValue = parseInt(value)
    displayValue = "0"
    changingDisplay()
    return firstValue
}

//starting functions
changingDisplay()