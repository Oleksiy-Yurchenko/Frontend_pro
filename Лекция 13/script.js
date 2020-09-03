const calc = new Calculator(10);

const calc2 = new Calculator(500);


function Calculator(baseNumber) {
    this.baseNumber = baseNumber;
    this.expression = this.baseNumber;
    
    this.sum = function(nextArg) {
        this.expression += ' + ' + nextArg;
        return this.baseNumber += nextArg;
    }

    this.sub = function(nextArg) {
        this.expression += ' - ' + nextArg;
        return this.baseNumber -= nextArg;
    }
 
    this.mult = function(nextArg) {
        this.nextArg = nextArg;
        this.expression += ' * ' + this.nextArg;
        return this.baseNumber *= nextArg;
    }
    
    this.div = function(nextArg) {
        this.expression += ' / ' + nextArg;
        return this.baseNumber /= nextArg;
    }

    this.set = function(nextArg) {
        this.expression = nextArg;
        return this.baseNumber = nextArg;
    }

    this.getResult = function() {
        return `${this.expression} = ${this.baseNumber}`;
    }
}


alert(calc.sum(5));
alert(calc.mult(10));
alert(calc.sub(40));
alert(calc.div(10));
alert(calc.getResult());
alert(calc.set(100));
alert(calc.getResult());

alert(calc2.sum(5));
alert(calc2.mult(10));
alert(calc2.sub(40));
alert(calc2.div(10));
alert(calc2.set(100));
alert(calc2.getResult())
