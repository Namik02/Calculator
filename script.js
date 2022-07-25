function add(num1,num2) {
    return num1 + num2
}
function subtract(num1,num2) {
    return num1 - num2
}
function multiply(num1,num2) {
    return num1 * num2
}
function divide(num1,num2) {
    return num1 / num2
}

function operate(operator,num1,num2) {
    switch (operator) {
        case "+":
            return add(num1,num2) 
        case "-":
            return subtract(num1,num2)
        case "*":
            return multiply(num1,num2)
        case "/":
            return divide(num1,num2)
        default:
            break;
    }
}


let storedNumber1 = null
let storedNumber2 = null
let storedOperator = null




//Hover effect for all buttons
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.onmouseover = () => button.classList.add('hoverEffect');
    button.onmouseout = () => button.classList.remove('hoverEffect');
    
});

// Function to change output
const output = document.querySelector('#output')
function outputChange(button) {
    if (output.innerHTML == 0 || output.innerHTML == "+" || output.innerHTML == "-" || output.innerHTML == "×" || output.innerHTML == "÷") {
        output.textContent =  button.innerHTML
    } else {
        output.textContent = output.textContent + button.innerHTML
    }
}


// Functionality for .number buttons
const number = document.querySelectorAll('.number')
number.forEach((button) => {
    button.addEventListener('click', () => {
        outputChange(button);
      });
})
// Functionality for .operator buttons
const operator = document.querySelectorAll('.operator')
operator.forEach((button) => {
    button.addEventListener('click', () => {
        storedNumber1 = output.textContent;
        output.textContent =  button.innerHTML;
        storedOperator = output.textContent;
    });
})

//Functionality for A/C button
const ac = document.querySelector('#ac')
ac.addEventListener('click', () => {
    output.textContent = 0
    storedNumber1 = null
    storedNumber2 = null
    storedOperator = null
})





