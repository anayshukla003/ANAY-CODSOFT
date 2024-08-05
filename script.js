const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            display.value = '';
        } else if (value === '&lt;') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousNumber = currentNumber;
            currentNumber = '';
            display.value = '';
        } else if (value === '=') {
            const result = calculate(previousNumber, currentNumber, operator);
            display.value = result;
            currentNumber = result;
            previousNumber = '';
            operator = '';
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
        case '-':
            return parseFloat(num1) - parseFloat(num2);
        case '*':
            return parseFloat(num1) * parseFloat(num2);
        case '/':
            return parseFloat(num1) / parseFloat(num2);
        default:
            return 0;
    }
}