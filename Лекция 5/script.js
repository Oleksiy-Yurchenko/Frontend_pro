const operator = getOperator();
const operandsArray = getOperandsArray();


alert(doCalculation(operator, operandsArray));


function getOperator() {
    let operatorInput = '';

    do {
        operatorInput = prompt('Что делать? (+-*/)');
    } while(validateOperator(operatorInput));

    return operatorInput;
}


function validateOperator(promptInput) {
    return ((!('+-/*'.includes(promptInput))) || (promptInput.length > 1));
}

 
function getOperandsArray() {
    let inputString = '';
    
    do {
        inputString = prompt('Введите числа');
    } while (catchEmptyInput(inputString));

    const roughArray = inputString.split(' ');
    const filteredArray = filterArray(roughArray)

    return filteredArray; 
}


function catchEmptyInput(promptInput) {
    return (promptInput === null || promptInput === '');
}


function filterArray(inputArray) {
    const outputArray = [];

    for (let i = 0, j = 0; i < inputArray.length; i++) {
        if (( inputArray[i] !== '') && (isFinite(inputArray[i]))) {
            outputArray[j] = +inputArray[i];
            j++;
        }
    }

    return outputArray;
}


function doCalculation(operation, arrayOfOperands) {
    let outputString = '';
    let result = arrayOfOperands[0];
    
    for (let i = 1; i < arrayOfOperands.length; i++) { 
        switch(operation) {
            case('+') : result += arrayOfOperands[i]; break;
            case('-') : result -= arrayOfOperands[i]; break;
            case('*') : result *= arrayOfOperands[i]; break;
            case('/') : result /= arrayOfOperands[i];
        }
    }
    outputString = arrayOfOperands.join(` ${operator} `);

    return `${outputString} = ${result}`;   
}

