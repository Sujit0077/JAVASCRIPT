// function declaration ---> function expression ------> arrow function

//from function expression just remove function keyword and after paranthesis use => sign



let hhbbdd = function () {
    console.log("Happy Birthday");
}

let hbd = () => {
    console.log("Happy Birthday");
}
hbd()


let plus24 = function () {
    console.log(2 + 4);
}
let twoplusfour = () => {
    console.log(2 + 4);
}


let num = function (num1, num2) {
    return num1 + num2;
}

let add2num = (num1, num2) => {
    return num1 + num2;
}
console.log(add2num(2, 7));


let oddd_even = function (num) {
    return num % 2 === 0;
}
let oe = (num) => {
    return num % 2 == 0;
}
console.log(oe(4));



let firstch = function (str) {
    return str[0];
}

let first_char = (str) => {
    return str[0];
}
console.log(first_char("Sujit"));



let search = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `Target is present at index ${i}`;
        }
    }
    return false;
}


let target = (arr, tar) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tar) {
            return `Target is present at index ${i}`;
        }
    }
    return false;
}
console.log(target([1, 2, 3, 4, 5, 6], 5));