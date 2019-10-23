
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
        id: id,
        createTemplate: function () {
            return `
                <>
            `
        }
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

