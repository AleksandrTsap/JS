'use strict'


const basket = {
    products: [
        {
            name: 'Масло Mobil 1',
            price: 2500,
            quantity: 1
        },
        {
            name: 'Маслянный фильтр Subaru',
            price: 5000,
            quantity: 1
        },
        {
            name: 'Воздушный фильтр Mahle',
            price: 600,
            quantity: 1
        },
    ],


    getTotalPrice() {
        return this.products.reduce((accum, current) =>
            accum + (current.price * current.quantity), 0);
    },


}

console.log(basket.getTotalPrice())
