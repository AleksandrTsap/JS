'use strict'


const id1 = {
    name: 'Масло Mobil 1',
    price: 2500,
    quantity: 1
}

const id2 = {
    name: 'Маслянный фильтр Subaru',
    price: 500,
    quantity: 1
}

const id3 = {
    name: 'Воздушный фильтр Mahle',
    price: 595,
    quantity: 1
}


function sumId(id) {
    return (id.price * id.quantity)
}


function sumBasket(...theArgs) {
    return theArgs.reduce((sum, current) => {
        return sum + current;
    }, 0);
}

console.log(sumBasket(sumId(id3), sumId(id2), sumId(id1)))