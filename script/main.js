// Задание 1:
var a = 1, b = 1, c, d;
c = ++a;
d = b++;
c = (2+ ++a); 
d = (2+ b++);
console.log('Задание 1:');
console.log('Код дает такие разультаты из-за постфиксной и префиксной записи а++ и ++а');
// Задание 2:
a = 2;
var x = 1 + (a *= 2);
console.log('Задание 2:');
console.log(x);
// Задание 3:
console.log('Задание 3:');
a = +prompt('Введите целое число:');
b = +prompt('Введите целое число:');
if (a >= 0 && b >= 0) {
    c = a - b;
    console.log('Разность введенных чисел равна: ' + c);
} else if (a < 0 && b < 0) {
    c = a * b;
    console.log('Произведение введенных чисел равно: ' + c);
} else {
    c = a + b;
    console.log('Сумма введенных чисел равно: ' + c);
}
// Задание 4:
console.log('Задание 4:');
a = +prompt('Введите число от 0 до 15');
switch (a) {
    case 0:
        console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
    case 1:
        console.log('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
    case 2:
        console.log('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
    case 3:
        console.log('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
    case 4:
        console.log('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
    case 5:
        console.log('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
    case 6:
        console.log('7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
    case 7:
        console.log('8, 9, 10, 11, 12, 13, 14, 15');
    break;
    case 8:
        console.log('9, 10, 11, 12, 13, 14, 15');
    break;
    case 9:
        console.log('10, 11, 12, 13, 14, 15');
    break;
    case 10:
        console.log('11, 12, 13, 14, 15');
    break;
    case 11:
        console.log('12, 13, 14, 15');
    break;
    case 12:
        console.log('13, 14, 15');
    break;
    case 13:
        console.log('14, 15');
    break;
    case 14:
        console.log('15');
    break;
    case 15:
        console.log('Вы ввели 15.');
    break;
    default:
        console.log('Число должно быть от 0 до 15!');
}
// Задание 5:
console.log ('Задание 5-6');
function mathAddition (x, y) {
    let z = x + y;
    return 'Сумма ' + x  + ' + ' + y + ' равна ' + z;
}

function mathSubtraction (x, y) {
    let z = x - y;
    return 'Разность ' + x  + ' и ' + y + ' равна ' + z;
}

function mathMultiplication (x, y) {
    let z = x * y;
    return 'Произведение ' + x  + ' и ' + y + ' равно ' + z;
}

function mathDivision (x, y) {
    let z = x / y;
    return 'Деление ' + x  + ' на ' + y + ' равно ' + z;
}
console.log(mathDivision (10, -2));
// Задание 6:
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            console.log(mathAddition (arg1, arg2));
        break;
        case 'subtraction':
            console.log(mathSubtraction (arg1, arg2));
        break;
        case 'multiplication':
            console.log(mathMultiplication (arg1, arg2));
        break;
        case 'divison':
            console.log(mathDivision (arg1, arg2));
        break;
        default:
            console.log('Введите корректную операцию!');
    }
}

console.log(mathOperation(3, 5, 'multiplication'));