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


let var1 = 0
let var2 = null
let var3 = null


const output = document.querySelector('#output')


//Hover effect for all buttons
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.onmouseover = () => button.classList.add('hoverEffect');
    button.onmouseout = () => button.classList.remove('hoverEffect');
    
});

// Function to add output functionality to specified button class
function addOutput(buttons) {
    buttons.forEach((button) => {
            button.onclick = () => test(button)
    }) 

}

// Function to change output
function test(button) {
    if (output.innerHTML == 0 || output.innerHTML == "+" || output.innerHTML == "-" || output.innerHTML == "X" || output.innerHTML == "÷") {
        output.textContent =  button.innerHTML
    } else {
        output.textContent = output.textContent + button.innerHTML
    }
}


// Selectors and called functions for button class
const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
addOutput(number)
addOutput(operator)


operator.forEach((button) => {
    button.onclick = () => var1 = 2
    button.onclick = () => output.textContent =  button.innerHTML
})



function var1creator() {
    var1 = output.innerHTML
}



