// ----------Function declaration---------
function hbd() {
    console.log("Happy Birthday");
}
// -------------Function expression----------

//function expression is nothing but assigning a variable with a function without the function name

let hhbbdd = function () {
    console.log("Happy Birthday");
}
hhbbdd()

//------------------------------------------------------------------------

// ----------Function declaration---------

function twoplusfour() {
    console.log(2 + 4);
}
// -------------Function expression----------

let plus24=function(){
    console.log(2+4);
}
plus24();
//----------------------------------------------------------------------------

// ----------Function declaration---------

function add2num(num1, num2) {//parameter
    return num1 + num2;
}
// -------------Function expression----------
let num=function(num1,num2){
    return num1+num2;
}
console.log(num(5,6));

//----------------------------------------------------------------------------

// ----------Function declaration---------
function Eo(num1) {
        return num1 & 1 ? "odd" : "even";
}

// -------------Function expression----------
let oddd_even=function(num){
    return num%2===0;
}
console.log(oddd_even(4));

//----------------------------------------------------------------------------

// ----------Function declaration---------
function firstchar(str) {
    return str[0];
}


// -------------Function expression----------
let firstch=function(str){
    return str[0];
}
console.log(firstch("Sujit"));



//----------------------------------------------------------------------------

// ----------Function declaration---------
function target(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `Target is present at an index ${i}`;
        }
    }
    return false;
}

// -------------Function expression----------
let search=function(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return `Target is present at index ${i}`;
        }
    }
    return false;
}
console.log(search([1,2,3,4,5,6],5))

