const questions = {
    'query_1': {
	'question': 'Сколько будет 2+2?', 
        'answer':4
	}, 
    'query_2': {
	'question': 'Солнце встает на востоке?', 
        'answer':'да'
	},
    'query_3': {
	'question': 'Сколько будет 5 / 0?', 
        'answer':'infinity'
	},
    'query_4': {
	'question': 'Какого цвета небо?', 
        'answer':'голубого'
	},
    'query_5': {
	'question': 'Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?', 
	'answer':42
	}
}


let ratingCount = 0;

for (let id in questions) {
    if(prompt(questions[id].question).toLowerCase() == questions[id].answer){
        ratingCount += 10;
    }
}


alert('Ваш результат: ' + ratingCount + ' баллов.');
*/