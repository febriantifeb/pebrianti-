let currentInput = '';  // Holds the current input in the display
let operation = '';     // Stores the current operation (+, -, *, /)
let previousInput = ''; // Stores the previous number before an operation
let history = [];       // Stores the calculation history

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// Function to set the operation
function setOperation(op) {
    if (currentInput === '') return; // Avoid setting operation if no number is input
    if (previousInput !== '') {
        calculate(); // Perform calculation if there's a pending operation
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    if (previousInput === '' || currentInput === '') return; // Ensure both numbers are present
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            if (currentInput === '0') {
                alert('Error: Division by zero');
                return;
            }
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }

    // Show result on the display and add it to history
    document.getElementById('display').value = result;
    history.push(`${previousInput} ${operation} ${currentInput} = ${result}`);
    updateHistory();
    currentInput = result.toString();
    previousInput = '';
    operation = '';
}

// Function to update the history list on the screen
function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear the history list
    history.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        historyList.appendChild(listItem);
    });
}
