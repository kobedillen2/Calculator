const numbers = '1234567890'
const operators = '/*+-'

function add(a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(firstNumber, operator, secondNumber) {
    if (operator == '+') {
        return Number(firstNumber) + Number(secondNumber);
    }
    if (operator == '-') {
        return Number(firstNumber) - Number(secondNumber);
    }
    if (operator == '/') {
        return Number(firstNumber) / Number(secondNumber);
    }
    if (operator == '*') {
        return Number(firstNumber) * Number(secondNumber);
    }
}

let firstNumber = new String()
let secondNumber = new String()
let operator
let operatorActive = 'False'
let result

function calculator(inputvalue) {
    if(inputvalue == 'C') {
        operatorActive = 'False'
        firstNumber = ""
        secondNumber = ""
        operator = ""
        display.textContent = ""
    } else if (inputvalue == 'del') {
        if (operatorActive == 'True') {
            secondNumber = secondNumber.slice(0,-1)
            display.textContent = secondNumber
        } else {
            firstNumber = firstNumber.slice(0,-1)
            display.textContent = firstNumber
        }
    }
    switch (operatorActive) {
        case 'True':
        if(numbers.includes(inputvalue)) {
            if (secondNumber.length < 8) {
            secondNumber = secondNumber.concat(inputvalue)
            console.log(secondNumber)
            display.textContent = secondNumber }
        } else if (operators.includes(inputvalue)) {
            result = operate(firstNumber, inputvalue, secondNumber)
            display.textContent = result
            firstNumber = result
            secondNumber = ""
        } else if (inputvalue == '=') {
            result = operate(firstNumber, operator, secondNumber)
            display.textContent = result
            firstNumber = result
            secondNumber = ""
            operatorActive = 'False'
            operator = ""
        }
        break;
        case 'False': {
        if(numbers.includes(inputvalue)) {
            if (typeof firstNumber === 'number') {
                firstNumber = ""
                firstNumber = firstNumber.concat(inputvalue)
                display.textContent = firstNumber
            } else {
                if (firstNumber.length < 8) {
                firstNumber = firstNumber.concat(inputvalue)
                display.textContent = firstNumber
                }
            }
            
        } 
        else if(operators.includes(inputvalue))
        {
            operatorActive = "True"
            console.log("operator is now active")
            operator = inputvalue
        }
        break;
    }  
}
}


const btns = document.querySelectorAll("button")
const display = document.querySelector("h1")
let displayvalue

btns.forEach(function (i) {
    i.addEventListener('click', () => {
    playRandomAudio()
    displayvalue = i.textContent
    calculator(i.textContent)
     }) })

const audioArray = ["cat1.mp3", "cat2.mp3", "cat3.mp3", "cat4.mp3", "cat5.mp3"]

function playRandomAudio() {
    const audioIndex = Math.floor(Math.random() * audioArray.length);
    const audio = new Audio(audioArray[audioIndex]);
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
}