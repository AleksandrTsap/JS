'use strict'

function summa(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}


function operation(a, b) {
    if ((a >= 0) && (b >= 0)) {
        return subtraction(a, b)
    } else if ((a < 0) && (b < 0)) {
        return multiplication(a, b)
    } else
        return summa(a, b)
}


let a = 10, b = 10
console.log(operation(a, b))