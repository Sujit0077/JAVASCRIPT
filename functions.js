//perform specific task 
//code reusability
//modularity
//readability increase




// --------------------------------------------Function declaration-----------




function hbd() {
    console.log("Happy Birthday");
    // return str;
}
hbd();

//parameter str not pass undefined
// let hhbbdd=hbd();
// console.log(hhbbdd);//undefined


// hbd.apply()
// hbd.call()
function twoplusfour() {
    console.log(2 + 4);
}
twoplusfour();

//5+8
//so the above code is not reusable

//DRY

//we can use return keyword to return value

//lets make reusable code

function add2num(num1, num2) {//parameter
    return num1 + num2;
}
//as the above function is returning value to store that we have to use a variable

let add = add2num(5, 8)//argument
console.log(add);

// what is i dont pass any argument to the function
add = add2num()//NaN
console.log(add);




// ---------------------------------------------------


// console.log(undefined+undefined);//NaN
//console.log(2+3+undefined)//NaN



//task


// 1---create a function that takes one number as input and returns true if it is even or false for odd

function Eo(num1) {
    // if(num1&1){
    //     return "odd";
    // }else{
    //     return "Even";
    // }

    //short hand
    return num1 & 1 ? "odd" : "even";
}
let ans = Eo(4);
console.log(ans);

// 2-create a function that takes string as input and retutns it first chararcter
function firstchar(str) {
    return str[0];
}
let str = firstchar("Sujit");
console.log(str);


//3-create a function that takes array as an input and a target and returns the index if the target if its present


function target(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `Target is present at an index ${i}`;
        }
    }
    return false;

}
let tar=target([1,5,9,7,6],9);
console.log(tar);