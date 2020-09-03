const QUESTIONS = {
	action: 'Что вы хотите сделать? (add, sub, mult, div)',
	firstArg: 'Введите первый аргумент:',
	secondArg: 'Введите второй аргумент:'
	}


const ACTIONS = {add:'+', sub:'-', mult:'*', div:'/'}  


function getAnswer(question) {return prompt(question)}


userAction = getAnswer(QUESTIONS.action).toLowerCase();


if (userAction in ACTIONS) {
    argOne = +getAnswer(QUESTIONS.firstArg);
    argTwo = +getAnswer(QUESTIONS.secondArg);
    switch(userAction) {
        case 'add': result = argOne + argTwo; break;
        case 'sub': result = argOne - argTwo; break;
        case 'mult': result = argOne * argTwo; break;
        case 'div': result = argOne / argTwo; 
	} 
    argTwo = (argTwo < 0) ? '(' + argTwo + ')' : argTwo;
    alert(`${argOne} ${ACTIONS[userAction]} ${argTwo} = ${result}`);
} else {     
    alert('Неправильный ввод оператора');
}
