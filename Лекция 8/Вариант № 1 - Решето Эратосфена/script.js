alert(getSimpleNumbers(100));


function getSimpleNumbers(num){
    const primeArray = [];

    for (let i = 0; i <= num; i++) {
        primeArray.push(i)
    }

    for (let i = 2; i <= (num / 2); i++) {
        for (let j = 2; j <= (num / i); j++) {
            primeArray[i*j] = null;
        }
    }

    return primeArray.filter(item => item).slice(1);
}
