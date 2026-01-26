let span = document.querySelectorAll('span');
let screen = document.querySelector('.calculator .screen');

let operationSpan = ''; 
let operandOne = ''; 
let operandTwo = ''; 
let result = ''; 

span.forEach((spn) => {
    spn.addEventListener('click', () => {
        let currentElement = spn.innerHTML; 

        // Handle the equals button
        if (currentElement === '=') {
            operandTwo = screen.innerHTML; // Assign the second operand
            switch (operationSpan) {
                case '+':
                    result = parseFloat(operandOne) + parseFloat(operandTwo);
                    break;
                case '-':
                    result = parseFloat(operandOne) - parseFloat(operandTwo);
                    break; 
                case '/':
                    result = parseFloat(operandOne) / parseFloat(operandTwo);
                    break; 
                case '*':
                    result = parseFloat(operandOne) * parseFloat(operandTwo);
                    break; 
            }
            screen.innerHTML = result;  // Display the result
            operandOne = result;  // Store the result for future calculations
            operandTwo = '';  // Reset operandTwo
            operationSpan = '';  // Reset the operator
        } 
        // Handle operator buttons
        else if (spn.classList.contains('op')) {
            operationSpan = currentElement;  // Store the operator
            operandOne = screen.innerHTML;  // Store the first operand
            screen.innerHTML = '';  // Clear the screen for the second operand
        } 
        // Handle clear screen (AC)
        else if (currentElement === 'AC') {
            screen.innerHTML = ''; 
            operandOne = '';
            operandTwo = ''; 
            operationSpan = '';
            result = ''; 
        } 
        // Handle ON button, similar to clear
        else if (currentElement === 'ON') {
            screen.innerHTML = ''; 
            operandOne = '';
            operandTwo = ''; 
            operationSpan = '';
            result = ''; 
        } else if (currentElement === 'DE') {
            screen.innerHTML  = screen.innerHTML.slice(0 , -1)
        }
        // Handle numbers and decimal points
        else {
            // Append the clicked number or dot to the screen
            screen.innerHTML += currentElement;
        }
    });
});
