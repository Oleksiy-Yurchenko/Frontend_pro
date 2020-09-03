const QUESTIONS = {
    operator: 'Что вы хотите сделать? (+, -, /, *)', 
    qttyOfArgs: 'Введите количество аргументов:',
    argument: 'Введите аргумент #'
	}

const ACTIONS = {
    '+': function (argOne, argTwo) {return argOne + argTwo;},	  
    '-': function (argOne, argTwo) {return argOne - argTwo;},
    '*': function (argOne, argTwo) {return argOne * argTwo;},
    '/': function (argOne, argTwo) {return argOne / argTwo;},
	}  

const MAX_ARG_NUM = 7;
const MIN_ARG_NUM = 2;


let arguments = {};       	
let answerToDisplay = '';
let result = 0;
let userAction = null;
let argNumber = null;



while(!(userAction in ACTIONS)) {
    userAction = prompt(QUESTIONS.operator);
}

	
while (!((MIN_ARG_NUM <= argNumber) && (argNumber < MAX_ARG_NUM))) {
    argNumber = +prompt(QUESTIONS.qttyOfArgs);
}


for (let i = 1; i <= argNumber; i++) {
    while (isNaN(arguments[i])) {
        arguments[i] = +prompt(QUESTIONS.argument + i);
    }
    if (i < argNumber) {
        answerToDisplay += `${arguments[i]} ${userAction} `
    } else {
        answerToDisplay += `${arguments[i]}`;
    }
    if (i > 1) {
        arguments[i] = ACTIONS[userAction](arguments[i-1], arguments[i]);
        result = arguments[i];
    }
}


alert(answerToDisplay + ' = ' + result);