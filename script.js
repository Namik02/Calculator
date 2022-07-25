function add(num1,num2) {
    return +num1 + +num2
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
        case "×":
            return multiply(num1,num2)
        case "÷":
            return divide(num1,num2)
        default:
            break;
    }
}



//Hover effect for all buttons
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.onmouseover = () => button.classList.add('hoverEffect');
    button.onmouseout = () => button.classList.remove('hoverEffect');
    
});



// Memory 
let storedNumber1 = null
let storedNumber2 = null
let storedOperator = null



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
    if (storedNumber1) {
        
    }
    storedNumber1 = output.textContent;
    output.textContent =  button.innerHTML;
    storedOperator = output.textContent;
});
});

// Functionality for decimal button
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    if (output.textContent.includes('.') || output.innerHTML == 0 || output.innerHTML == "+" || output.innerHTML == "-" || output.innerHTML == "×" || output.innerHTML == "÷") {
    } else {
        output.textContent = output.textContent + decimal.innerHTML
    }
})

// Functionality for equal button
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    if (storedNumber1 !== null || storedOperator !== null) {
        storedNumber2 = output.textContent;
        result = operate(storedOperator,storedNumber1,storedNumber2)  
        // output.textContent = result
        if (result % 1 !== 0) {
            result = Math.round((result) * 100000) / 100000
            output.textContent = result
        } else {
            output.textContent = result
        }
    }
    
})

// Functionality for C button
const c = document.querySelector('#c');
c.addEventListener('click' , () => {
    output.textContent = output.textContent.slice(0, -1)
    if (output.textContent === "") {
        output.textContent = 0
    }
})

//Functionality for A/C button
const ac = document.querySelector('#ac')
ac.addEventListener('click', () => {
    output.textContent = 0
    storedNumber1 = null
    storedNumber2 = null
    storedOperator = null
})

//Functionality for +/- button
const plusMinus = document.querySelector('#plusMinus');
plusMinus.addEventListener('click', () => {
    if (output.innerHTML == 0 || output.innerHTML == "+" || output.innerHTML == "-" || output.innerHTML == "×" || output.innerHTML == "÷") {
    } else if (output.innerHTML.charAt(0) == "-") {
        output.textContent = output.textContent.slice(1)
    } else {
        output.textContent = "-" + output.textContent
    }
})

//Functionality for % button
const percentage = document.querySelector('#percentage');
percentage.addEventListener('click', () => {
    if (output.innerHTML == 0 || output.innerHTML == "+" || output.innerHTML == "-" || output.innerHTML == "×" || output.innerHTML == "÷") {
    } else {
        output.textContent = output.textContent / 100
    }
})




