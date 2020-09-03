const obj = {name: 'Alex', age: 33, adress: {country: 'UA', city: {name: 'Dnipro'}}}; 
const objCopy = copy(obj);


alert(objCopy.name);


function copy(inputObj) {
    let objectCopy = {};
    Object.keys(inputObj).forEach((key) => 
        {return ((typeof(inputObj['key']) === 'object') && (inputObj[key] !== null)) ?  
            copy(inputObj[key]) : objectCopy[key] = inputObj[key] 
        });
    return objectCopy;
}