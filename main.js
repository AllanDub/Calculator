"use strict";


function Calc(action, num1, num2) {
    if (isRelativNumber(num1) && isRelativNumber(num2)) {
        switch (action) {
            case 'sum':
                return (num1 + num2);
            case 'diff':
                return (num1 - num2);
            case 'multi':
                return (num1 * num2);
            case 'divis':
                return (num1 / num2);
            case 'remain':
                return (num1 % num2);
            case 'power':
                return (num1 ** num2);
            default:
                return ("Unkhown operation");
        }
    } else return ("ERROR");
}

function isRelativNumber(num) {
    if (typeof num === 'number') return true;
    return false;
}


// Tests
console.log(`'sum' 3 + 2 = ${Calc('sum', 3, 2)}`);
console.log(`'diff' 3 - 2 = ${Calc('diff', 3, 2)}`);
console.log(`'multi' 3 * 2 = ${Calc('multi', 3, 2)}`);
console.log(`'divis' 3 / 2 = ${Calc('divis', 3, 2)}`);
console.log(`'remain' 3 % 2 = ${Calc('remain', 3, 2)}`);
console.log(`'power' 3 ** 2 = ${Calc('degree', 3, 2)}`);
console.log(`'abracadabra' 3 + 2 = ${Calc('abracadabra', 3, 2)}`);
console.log(`'num1 != number' 3 + 2 = ${Calc('multi', '3y', 2)}`);
console.log(`'num2 != number' 3 + 2 = ${Calc('multi', 3, '2f')}`);