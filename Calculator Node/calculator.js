const sum = require('./sum');
const substraction = require('./substraction');
const division = require('./division');
const multiplication = require('./multiplication');


module.exports = {
    add: (acc, arg) => sum(acc, arg),
    sub: (acc, arg) => substraction(acc, arg),
    div: (acc, arg) => division(acc, arg),
    mult: (acc, arg) => multiplication(acc, arg),
}