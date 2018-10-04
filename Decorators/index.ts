type Stooge = 'Larry' | 'Moe' | 'Curly';

function showMessage(person: Stooge, message: string ) {
    console.log(`Hey ${person}, ${message}`)
}

showMessage('Moe', 'Hit someone with a pie.');

showMessage('Curly', 'Watch out for that pie!');

showMessage('Jake', 'These examples are amazing!!!!!');




//method decorator
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

//accessor decorator
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

//class decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

//build in ones
