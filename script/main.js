// Задание 1:
console.log('Задание 1:');
var arr = [];
var x = 1;
while (x < 100) {
    x++;
    arr.push(x);
}
var a = 2;
var b = 2;
while (a <= 100){
    a += b;
    arr.splice(arr.indexOf(a), 1);
}
a = 4;
b = 3;
while (a < 100){
    if (a % b === 0 && arr.indexOf(a) !== -1){
        arr.splice(arr.indexOf(a), 1);
    }else {
        a++;
    }
}
a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}
a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}
console.log(arr);
// Задание 3:
console.log('Задание 3:');
var z = Math.floor(Math.random()*9000 + 1000);
var num = +prompt('Попробуй угадать число, которое я загадал\nВведи четырехзначное число:');
function numbers (z, num) {
    if (num === z) {
        return 'Вы угадали число!'
    } else if (num < z) { 
        return numbers (z, num = +prompt('Недобор, попробуй еще'));
    } else if (num > z) {
        return numbers (z, num = +prompt('Перебор, попробуй еще'));
    } else return 'Вы ввели некорректные данные'
}
console.log(numbers (z, num));
// Задание 4:
console.log('Задание 4:');
var i;
    for ( i = 0; i < 9; i++, console.log(i)) {}
// Задание 5:
console.log('Задание 5:');
var str = "";
for(var i = 1; i <= 20; i++) {
str += 'x';
console.log(str);
}