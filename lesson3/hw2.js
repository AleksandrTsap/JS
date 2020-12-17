'use strict'

const shoppingCart = [
    {
        name: 'Масло Mobil 1',
        price: 2500,
        quantity: 2
    },
    {
        name: 'Маслянный фильтр Subaru',
        price: 500,
        quantity: 1
    },
    {
        name: 'Воздушный фильтр Mahle',
        price: 595,
        quantity: 1
    }
];

function countBasketPrice(basket) {
    return basket.reduce(function (totalPrice, cartItem) {
        return totalPrice += cartItem.price * cartItem.quantity;
    }, 0);
}

console.log(countBasketPrice(shoppingCart))