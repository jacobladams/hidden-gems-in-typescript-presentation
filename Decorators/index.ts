// function log<T>() {
//     console.log("log evaluated");
//     return function (target : T, propertyKey: keyof T, descriptor?: PropertyDescriptor):void {
//         console.log(` ${propertyKey} called`);
//     };
// };

function log() {
    console.log("log evaluated");
    return function (target, propertyKey, descriptor?: PropertyDescriptor):PropertyDescriptor {
        console.log(`${propertyKey} called`);
        return descriptor;
    };
};

function handleException() {
    return function(target, propertyKey, descriptor?: PropertyDescriptor):PropertyDescriptor {
        const originalFunction: Function = target[propertyKey];
        target[propertyKey] = function() {
            try {
                var context = this
                var args = arguments;
                return originalFunction.apply(context, args);
            } catch(error) {
                console.log(`Caught Error ${error}`);
            }
        }
        return descriptor;
    };
};


// function log<T>(target : T, propertyKey: keyof T, descriptor?: PropertyDescriptor) {
//         console.log(` ${propertyKey} called`);
// };


class SomeService {

    @log()
    divide(a, b) {
        return a / b;
    }

    @handleException()
    pow(a, b) {
        throw 'something went wrong';
        //return Math.pow(a, b);
    }
}

const service = new SomeService();
const answer = service.divide(4,2);

console.log(answer);

const answer2 = service.pow(4, 2);
console.log(answer2);

// //method decorator
// function handleException() {
//     console.log("g(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("g(): called");
//     }
// }

// //accessor decorator
// function g() {
//     console.log("g(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("g(): called");
//     }
// }

// //class decorator
// function sealed(constructor: Function) {
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }

//build in ones
