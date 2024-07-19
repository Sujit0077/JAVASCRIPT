// function declaration ---> function expression ------> arrow function

//from function expression just remove function keyword and after paranthesis use => sign

//------------------------------------------------------------------------------------------------

//--------------------------------function expression-----------------------------
let hhbbdd = function () {
    console.log("Happy Birthday");
}
//------------------------------arrow function------------------------------------
let hbd = () => {
    console.log("Happy Birthday");
}
hbd()
//------------------------------------------------------------------------------------------------

//--------------------------------function expression-----------------------------

let plus24 = function () {
    console.log(2 + 4);
}
//------------------------------arrow function------------------------------------

let twoplusfour = () => {
    console.log(2 + 4);
}
//------------------------------------------------------------------------------------------------

//--------------------------------function expression-----------------------------

let num = function (num1, num2) {
    return num1 + num2;
}
//------------------------------arrow function------------------------------------

let add2num = (num1, num2) => {
    return num1 + num2;
}
console.log(add2num(2, 7));
//------------------------------------------------------------------------------------------------

//--------------------------------function expression-----------------------------

let oddd_even = function (num) {
    return num % 2 === 0;
}
//------------------------------arrow function------------------------------------

let oe = (num) => {
    return num % 2 == 0;
}
console.log(oe(4));
//------------------------------------------------------------------------------------------------


//--------------------------------function expression-----------------------------

let firstch = function (str) {
    return str[0];
}
//------------------------------arrow function------------------------------------

let first_char = (str) => {
    return str[0];
}
console.log(first_char("Sujit"));
//------------------------------------------------------------------------------------------------


//--------------------------------function expression-----------------------------

let search = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `Target is present at index ${i}`;
        }
    }
    return false;
}

//------------------------------arrow function------------------------------------

let target = (arr, tar) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tar) {
            return `Target is present at index ${i}`;
        }
    }
    return false;
}
console.log(target([1, 2, 3, 4, 5, 6], 5));








/////////////////////////////////////////////////////////////////
let sayhello = function () {
    console.log("hello1");
}
sayhello();

sayhello = () => {
    console.log("hello");
}

sayhello()



//if only one porameter is passed to function then no need to use paranthesis
//but if there are zero or more than 1 parameter you have to use paranthesis
//for ex


let sayhello1=str=>{
    return `hello ${str}`
}
console.log(sayhello1("sujit"))




// if the function is also returing in one line then return keyword and paranthesis  can also be removed
//above function can be re written as

sayhello1=str=>`hello ${str}`;
console.log(sayhello1("sujit"));