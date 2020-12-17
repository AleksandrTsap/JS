'use strict'

let arr = []
let e = 1

one:
    while (e < 100) {
        e++;
        let n = 2;
        while (n < e) {
            if ((e % n) == 0) {
                continue one;
            }
            n++;
        }
        arr.push(e);
    }

console.log(arr)

let arr2 = []

function numberx(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if ((number % i) == 0) {
            return false;
        }
    }
    return true;
}

let i = 0;

while (i < 100) {
    if (numberx(i)) {
        arr2.push(i);
    }
    i++;
}

console.log(arr2)

