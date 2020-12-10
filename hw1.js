'use strict'

let Tc = prompt('Введите температуру в градусах')

function converter(Tc) {
    return (9 / 5) * Tc + 32

}


alert('Температура в Фаренгейтах: ' + converter(Tc))


