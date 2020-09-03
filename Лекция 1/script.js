let answer = prompt('What is your name?');

//let greeting = answer ? 'Hello, ' + answer + '! How are you?' : 'Hello, stranger! How are you?';

let greeting = 'Hello, ' + (answer ? answer : 'stranger') + '! How are you?';

//вот так лучше

alert(greeting);

