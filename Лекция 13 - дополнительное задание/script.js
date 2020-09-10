const person = {name: 'Alex', surname:'Smith', phone: '+380 00 000 00 0'};

/*
function createTemplate(stringTemplate){
    return function(object) {
        let expression = stringTemplate;
        Object.keys(object).forEach((key) => 
            (expression = expression.replace(new RegExp(`{{${key}}}`, 'gm'), object[key])));
        return expression;
    }
}
*/

function createTemplate(stringTemplate){
    return function(object) {
        let expression = stringTemplate;
        Object.keys(object).forEach((key) => 
            (expression = expression.replace('{{' + key + '}}', object[key])));
        return expression;
    }
}



const helloTemplate  = createTemplate('Hello, {{name}} {{name}}');



alert(helloTemplate(person)); // возвращает Hello, Alex!

const detailsTemplate = createTemplate('{{name}} {{surname}}, phone {{phone}} {{phone}} {{phone}}');

alert(detailsTemplate(person));



/*
Дополнительное задание 

Написать функцию createTemplate.  в нее в качестве аргумента передается шаблон строки.

Она должна возвращать другую функцию. При вызове этой второй функции, мы передаем в нее объект. Функция должна вернуть заполненый шаблон значениями из объекта

Например
const person = {name: 'Alex', surname:'Smith', phone: '+380 00 000 00 00'}

const helloTemplate  = createTemplate('Hello, {{name}}!')

helloTemplate(person); // возвращает Hello, Alex!

const detailsTemplate = createTemplate('{{name}} {{surname}}, phone {{phone}}');

detailsTemplate(person) // возвращает Alex Smith, phone +380 00 000 00 00

Обратите внимание, что функция должна быть универсальная и работать с абсолютно любыми шаблонами и объектами.

Для реализации понадобится метод Object.keys()
*/