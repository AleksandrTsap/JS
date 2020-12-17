'use strict'

function modObj(number) {
    if (number > 999) {
        console.log('Число более 999')
        return {}
    }
    const newObj = {};
    newObj.единицы = number % 10;
    newObj.десятки = (Math.floor((number / 10) % 10));
    newObj.сотни = (Math.floor(number / 100));
    return newObj;
}

let num = 345

console.log(modObj(num))