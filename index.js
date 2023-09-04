let totalEl = document.getElementById("total-el")

//Function to retrieve user-entered numbers.
function getNumbers() {
    let num1 = parseFloat(document.getElementById("num1-el").value)
    let num2 = parseFloat(document.getElementById("num2-el").value)

    //Verify that the user doesn't leave blank spaces.
    if (isNaN(num1) || isNaN(num2)) {
        totalEl.textContent = "Please enter your numbers!"
        return null;
    }

    return [num1, num2] //Return an array with the user's numbers.
}

//Function to receive another function (the one that operates with numbers)
//and also stores those numbers through the function getNumbers() in a variable named numbers.
function performOperation(func) {
    let numbers = getNumbers()
    let result = func(numbers[0], numbers[1])

    //The performOperation() function updates the HTML to display the Total with the accurate result value.
    totalEl.textContent = `Total: ${result}`
}

//Easies arrow functions to simplify the code.
//They pass to the performOperation() function the number values.
function add() {
    performOperation((num1, num2) => num1 + num2)
}

function subtract() {
    performOperation((num1, num2) => num1 - num2)
}

//With a conditional (ternary) operator me prevent a division by zero.
function divide() {
    performOperation((num1, num2) => (num2 !== 0 ? num1 / num2 : "Cannot divide by zero!"))
}

function multiply() {
    performOperation((num1, num2) => num1 * num2)
}
