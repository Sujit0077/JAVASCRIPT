//perform specific task 
//code reusability
//modularity
//readability increase

function hbd(){
    console.log("Happy Birthday");
    // return str;
}
hbd();

//parameter str not pass undefined
// let hhbbdd=hbd();
// console.log(hhbbdd);//undefined


// hbd.apply()
// hbd.call()
function twoplusfour(){
    console.log(2+4);
}
twoplusfour();

//5+8
//so the above code is not reusable

//DRY

//we can use return keyword to return value

//lets make reusable code

function add2num(num1,num2){//parameter
    return num1+num2;
}
//as the above function is returning value to store that we have to use a variable

let add=add2num(5,8)//argument
console.log(add);

// what is i dont pass any argument to the function
add=add2num()//NaN
console.log(add);




// ---------------------------------------------------


// console.log(undefined+undefined);//NaN
//console.log(2+3+undefined)//NaN



//task


// 1---create a function that takes one number as input and returns true if it is even or false for odd

function Eo(num1){
    // if(num1&1){
    //     return "odd";
    // }else{
    //     return "Even";
    // }

    //short hand
    return num1&1?"odd":"even";
}
let ans=Eo(4);
console.log(ans);