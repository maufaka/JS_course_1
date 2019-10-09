// Задание 1:
var max = 999;
var x = +prompt('Введите число от 0 до 999');
var digit = {
    units: 0,
    tens: 0,
    hundreds: 0,
};
function search () {
    if (x > 0 && x <= 9){
        digit.units = x;
    } else if (x > 0 && x <= 999){
        digit.units = Math.floor(x % 10);
        digit.tens = Math.floor(x / 10 % 10);
        digit.hundreds = Math.floor(x / 100 % 10);
    }else {
        console.log('Вы ввели число за диапазоном 0 - 999');
    }
    console.log(digit);
}
// Задание 2:
const ITEMS = ['Samsung', 'Honor', 'Iphone', 'ZTE', 'Xiaomi', 'Sony', 'Lenovo'];
const PRICES = [400, 350, 500, 300, 320, 370, 270];
const ID = [1, 2, 3, 4, 5, 6, 7];
let prod = createCat ();
function createCat () {
    let arr = [];
    for (let i = 0; i < ITEMS.length; i++) {
        arr.push (createProd(ITEMS[i], PRICES[i], ID[i]))
    }
    return arr;
}
function createProd (name, price, id) {
    return {
        name: name,
        price: price,
        id: id
    }
}
let store = {
    catlog: [],
    cart: [],
    create: function () {
        for (let i = 0; i < ITEMS.length; i++) {
            this.catlog.push (this._createProd(ITEMS[i], PRICES[i], ID[i]));
        }
    },
    _createProd: function (name, price, id) {
        return {
            name: name,
            price: price,
            id: id
        }
    }
}