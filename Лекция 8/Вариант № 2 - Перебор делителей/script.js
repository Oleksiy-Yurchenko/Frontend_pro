alert(getSimpleNumbers(100));


function getSimpleNumbers(number) {
    const primeArray = [];
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) primeArray.push(i);
    }
    return primeArray;
}
             
        
function isPrime(inputNumber){
    for (let divisor = 2; divisor <= inputNumber / 2; divisor++) {
        if (!(inputNumber % divisor)) return false;
    }
    return true;
}        
