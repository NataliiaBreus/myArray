//alert("Hello world");

//alert("Buy world!");
/*
console.log("Hello world");
console.log("test");
console.log("10");
console.log(10);
console.log(true);
console.log(false);
console.log(null);
console.log(undefined)
const helloStr = 'Hello world';
console.log(helloStr)
let boolVariable = true;
console.log(boolVariable, typeof boolVariable)
const test = undefined;
const variable = null;

console.log(test);
console.log(variable);
let data = 10;
if ('test') {
    console.log("success")
}
*/
/*
let a = 2;
let b = 3;
console.log(a*b);
let c = 5;
let d = 7;
console.log(c/d);
let e = 4;
let f = 6;
console.log(e+f);
let test = 11;
let bol = true;
let str = "java script";
let text = "100";
console.log(test, bol, str, text);

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /=11;
num +=1;
num -= 1;
console.log(num);
*/
/*
const userInput = prompt();
alert(userInput);

const myFirstFunc = function(){
    console.log("1");
}
myFirstFunc();
myFirstFunc();
myFirstFunc();
*/

// Task 1
const userInput1 = prompt("Enter number 1:");
const userInput2 = prompt ("Enter number 2:");

const maxNumber = function(val1, val2){
    return val1 > val2? val1 : val2;

}
const value = maxNumber(userInput1, userInput2);
console.log(value);

// Task 2

const minNumber = function(val1, val2){
    return val1 < val2? val1 : val2;

}
const number = minNumber(userInput1, userInput2);
console.log(number);

// Task 3
 const isOdd = function(num){
     if(num % 2 === 0){
         return("чётное");
     } 
         return (num, "нечётное");
 }
 console.log(isOdd(userInput1));
 
 // Task 4 (решение квадратного уравнения)
 const a = + prompt ("Enter a:");
 const b = + prompt ("Enter b:");
 const c = + prompt ("Enter c:");

 const quadratic = function (a,b,c){
     const D = b**2 - 4 * a * c;
     if (D<0){
         console.log ("D<0");
         return null;
     }
     if (D === 0){
         const x = - b / (2 * a);
         return [x];
     }
     const x1 = (- b + D** (1 / 2)) / (2 * a);
     const x2 = (- b - D** (1 / 2)) / (2 * a);
     return [x1, x2];
 }
 console.log(quadratic (a, b, c));

 // Task 5

 const day = +prompt("Введите число от 1 до 31:");
 switch (day){
    case 1:
    case 2:
    case 3: 
    case 4:
    case 5: 
    case 6:
    case 7:
    case 8: 
    case 9:
    case 10: {
        console.log("первая декада");
        break;
    }
    case 11:
    case 12:
    case 13: 
    case 14:
    case 15: 
    case 16:
    case 17:
    case 18: 
    case 19:
    case 20: {
console.log("вторая декада");
break;
    }
    case 21:
        case 22:
        case 23: 
        case 24:
        case 25: 
        case 26:
        case 27:
        case 28: 
        case 29:
        case 30:
        case 31: {
    console.log("третья декада");
    break;
        }
        default:{
            console.log("Число не из списка")
        }
 }