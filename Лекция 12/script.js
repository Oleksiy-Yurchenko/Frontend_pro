const calc = createCalculator(10);

const calc2 = createCalculator(500);


function createCalculator(firstArg) {
    let result = firstArg;
    
    return {
        sum: (nextArg) => result += nextArg,
        sub: (nextArg) => result -= nextArg,
        mult: (nextArg) => result *= nextArg,
        div: (nextArg) => result /= nextArg,
        set: (nextArg) => result = nextArg,
    }
}


alert(calc.sum(5));
alert(calc.mult(10));
alert(calc.sub(40));
alert(calc.div(10));
alert(calc.set(100));


alert(calc2.sum(5));
alert(calc2.mult(10));
alert(calc2.sub(40));
alert(calc2.div(10));
alert(calc2.set(100));