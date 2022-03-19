// script.js

//initializing values
var displayValue = "0"
var firstValue
var secondValue = "0"
var operand = ""
var storageDisplay = "0"

//getting calculator display
const display = document.querySelector("#display")

//rounder
function rounder(){
    if (displayValue.length > 9){
        displayValue = displayValue.slice(1)
        return displayValue
    }
}

//display change function
function changingDisplay(){
    rounder()
    storageValue = displayValue
    display.textContent = storageValue
}

//equals display
function equalsDisplay(){
    firstValue = storageValue
    display.textContent = storageValue
    return firstValue
}

//clear function
function clearDisplay() {
    displayValue = "0"
    firstValue = "0"
    secondValue = "0"
    operand = ""
    storageValue = "0"
    changingDisplay()
    clear.blur()
}

//clear button
const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    clearDisplay()
})

//delete function
function deleteIt() {
    if (displayValue.length > 1){
        displayValue = displayValue.slice(0, displayValue.length -1)
    }
    else if (displayValue.length === 1){
        displayValue = "0"
    }
    changingDisplay()
}

//delete button
const deleteButton = document.querySelector("#delete")
deleteButton.addEventListener("click", () => {
    deleteIt()
})

//negative number function
function negativeNancy() {
    const keepSakes = parseFloat(storageValue)
    if (keepSakes > 0){
        displayValue = (Math.abs(storageValue) * -1)
    }
    else if (keepSakes < 0){
        displayValue = Math.abs(storageValue)
    }
    displayValue = displayValue.toString()
    changingDisplay()
}

//negative function
const negativeButton = document.querySelector("#posneg")
negativeButton.addEventListener("click", () => {
    negativeNancy()
})

//getting keypad actions
const numberpad = document.querySelector(".keypad")
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

//decimal making function
function laDecimal() {
    displayValue.includes(".")
    ? ""
    : displayValue = displayValue.concat(".")
    changingDisplay()
}

//decimal button
const decimalButton = document.querySelector("#decimal")
decimalButton.addEventListener("click", () => {
    laDecimal()
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
    secondValue = parseFloat(storageValue)
    if (storageValue === "-"){
        alert("Invalid format")
        clearDisplay()
    }
    else if (operand === "") {
        return 
    }
    else{
    storageValue = operate(operand, firstValue, secondValue)
    console.log(displayValue)
    if (storageValue > 999999999){
        storageValue = Infinity + 1
    }
    equalsDisplay()
    displayValue = "0"
    secondValue = "0"
    }
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
        clearDisplay()
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
    if (operand !== ""){
        secondValue = parseFloat(storageValue)
        storageValue = operate(operand, firstValue, secondValue)
        equalsDisplay()
        firstvalue = storageValue
        displayValue = "0"
        return firstValue
    } else{
    value = storageValue
    firstValue = parseFloat(value)
    displayValue = "0"
    changingDisplay()
    return firstValue
}}

//keyboard function
document.addEventListener("keypress", (event) => {
    var code = event.code
    let isShift = false
    isShift = event.shiftKey
    if (code === "Numpad0" || code === "Digit0"){
        displayValue === "0"
        ? displayValue = "0"
        : displayValue = displayValue.concat("0")
        changingDisplay()
    }
    else if (code === "Numpad1" || code === "Digit1"){
        displayValue === "0"
        ? displayValue = "1"
        : displayValue = displayValue.concat("1")
        changingDisplay()
    }
    else if (code === "Numpad2" || code === "Digit2"){
        displayValue === "0"
        ? displayValue = "2"
        : displayValue = displayValue.concat("2")
        changingDisplay()
    }
    else if (code === "Numpad3" || code === "Digit3"){
        displayValue === "0"
        ? displayValue = "3"
        : displayValue = displayValue.concat("3")
        changingDisplay()
    }
    else if (code === "Numpad4" || code === "Digit4"){
        displayValue === "0"
        ? displayValue = "4"
        : displayValue = displayValue.concat("4")
        changingDisplay()
    }
    else if (code === "Numpad5" || code === "Digit5"){
        displayValue === "0"
        ? displayValue = "5"
        : displayValue = displayValue.concat("5")
        changingDisplay()
    }
    else if (code === "Numpad6" || code === "Digit6"){
        displayValue === "0"
        ? displayValue = "6"
        : displayValue = displayValue.concat("6")
        changingDisplay()
    }
    else if (code === "Numpad7" || code === "Digit7"){
        displayValue === "0"
        ? displayValue = "7"
        : displayValue = displayValue.concat("7")
        changingDisplay()
    }
    else if (code === "Numpad8" || code === "Digit8"){
        displayValue === "0"
        ? displayValue = "8"
        : displayValue = displayValue.concat("8")
        changingDisplay()
    }
    else if (code === "Numpad9" || code === "Digit9"){
        displayValue === "0"
        ? displayValue = "9"
        : displayValue = displayValue.concat("9")
        changingDisplay()
    }
    else if (code === "NumpadAdd" || (code === "Equal" && isShift === true)){
        storingValues()
        operand = "toAdd"
        return(operand, firstValue)
    }
    else if (code === "NumpadDivide" || code === "Slash"){
        storingValues()
        operand = "toDivide"
        return(operand, firstValue)
    }
    else if (code === "NumpadSubtract" || code === "Minus"){
        storingValues()
        operand = "toSubtract"
        return(operand, firstValue)
    }
    else if (code === "NumpadMultiply" || (code === "Digit8" && isShift === true)){
        storingValues()
        operand = "toMultiply"
        return(operand, firstValue)
    }
    else if (code === "NumpadDecimal" || (code === "Period")){
        laDecimal()
    }
    else if (code === "KeyC"){
        clearDisplay()
    }
    else if (code === "NumpadEnter" || code === "Enter"){
        secondValue = parseFloat(storageValue)
        if (storageValue === "-"){
            alert("Invalid format")
            clearDisplay()
        }
        else if (operand === "") {
            return 
        }
        else{
        storageValue = operate(operand, firstValue, secondValue)
        if (storageValue > 999999999){
            storageValue = Infinity + 1
        }
        equalsDisplay()
        displayValue = "0"
        secondValue = "0"
        }
    }
})

//backspace button
document.addEventListener("keydown", (event) => {
    var code = event.code
    if (code === "Backspace") {
        deleteIt()
    }
})

//starting functions
changingDisplay()