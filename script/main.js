// Галерея
let roulette = document.querySelector ('#roulette');
let mainImg = document.querySelector ('#main');
let cur = 1;
function gallary () {
    let num = 7;
    let nodeStr = '';
    for (let i = 1; i <= num; i++) {
        nodeStr += `<img src="img/${i}.jpg">`;    
        }
        roulette.innerHTML = nodeStr;
    }
gallary ()

let gall = document.querySelector ('.gallery');
gall.addEventListener ('click', clicker);

function clicker (evt) {
    if (evt.target.parentElement.id === 'roulette') {
        mainImg.src = evt.target.src;
    } else if (evt.target.dataset.dir) {
        if (cur === 1 && evt.target.dataset.dir === '-1') cur = 8;
        if (cur === 7 && evt.target.dataset.dir === '1') cur = 0;
        alert('hi');
        //mainImg.src = `gallary/${cur += evt.target.dataset.dir}.jpg`
    }
}

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

// Калькулятор
let res = document.querySelector ('#display');
let clcul = {
    operation: '',
    prevNum: null,
    currNum: null,
    calcClicker: function (ev) {
        if (ev.target.dataset.value) {
            this.currNum += ev.target.dataset.value;
            res.innerHTML += ev.target.dataset.value;
        } else if (ev.target.dataset.oper) {
            !this.prevNum ? this.prevNum = this.currNum : this.res (this.operation);
            res.innerHTML += ev.target.dataset.oper;
        }
    }
}
//document.querySelector ('calc').addEventListener ('click', calcClicker);