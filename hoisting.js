//calling function or variable before initialization

//case 1  function declaration

hello1()//hello
function hello1(){
    console.log("hello1");
}



//case 2  function expression

// hello2()//eror hello2 is not a function --->prints nothing hello2;;;

// var hello2=function(){
//     console.log("hello2");
// }
// let hello2=function(){  
//     // Cannot access 'hello2' before initialization
//     console.log("hello2");
// }
// const hello2=function(){
//     // Cannot access 'hello2' before initialization
//     console.log("hello2");
// }




//case 3  arrow function
// hello3();//eror hello3 is not a function --->prints nothing hello3;;;
// var hello3=()=>{
//     console.log("hello3");
// }

// let hello3=()=>{
//     // Cannot access 'hello3' before initialization

//     console.log("hello3");
// }

// const hello3=()=>{
//     // Cannot access 'hello2' before initialization

//     console.log("hello3");
// }







// ------------------------------------------variables

console.log(hello);
// var hello = "hello";//undefined
// let hello="hello";//error//     // Cannot access 'hello' before initialization
const hello="hello";//error//     // Cannot access 'hello' before initialization