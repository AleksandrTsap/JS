'use strict'

function summa(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function multiplication(a, b){
    return a * b
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return summa(arg1, arg2)
        case 'умножение':
            return multiplication(arg1, arg2)
        case 'вычитание' :
            return subtraction(arg1, arg2)
    }
}

console.log(mathOperation(5,10, 'вычитание'))

