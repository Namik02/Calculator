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

const output = document.querySelector('#output')

//Hover effect for all buttons
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.onmouseover = () => button.classList.add('hoverEffect');
    button.onmouseout = () => button.classList.remove('hoverEffect');
    button.onclick = () => output.textContent = button.innerHTML
});








