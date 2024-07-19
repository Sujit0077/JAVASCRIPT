// if sstatement

// if(true){

// }
// if(false){

// }

// const isuserloggedin=true;
// if(isuserloggedin){

// }
// >, < ,<=,>=,!=,==,===,!==

// const temp=38;
// if (temp>30){
//     console.log("hot")
// }else{
//     console.log("cold");
// }


//const is local scope

// const target =100;
// if(target>50){
//     const tower="big";
//     console.log(`${tower}`);
// }
// console.log(`${tower}`)


//var is global scope

// const target =100;
// if(target>50){
//     var tower="big";
//     console.log(`${tower}`);
// }
// console.log(`${tower}`);


//shorthand

// const balance=1000;
// if(balance>500) console.log("test"),console.log("test2");
// console.log("test3")

//Nested if else

// if(balance<500){
//     console.log("less 500");
// }else if(balance<750){
//     console.log("less 750");
// }else if(balance<900){
//     console.log("less 900");
// }else{
//     console.log("less than 1200");
// }


// const userloggedin=true;
// const debitcard=true;
// const loggfromgoogle=false;
// const loggfromemail=true;

// if(userloggedin && debitcard){
//     console.log("Allow to buy course");
// }
// if(loggfromgoogle || loggfromemail){
//     console.log("USer logged in");
// }



// ---------switch case----------

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

//without break;
// let day = 1;

// switch (day) {
//     case 1:
//         console.log("Sunday");
//     case 2:
//         console.log("Monday");
//     case 3:
//         console.log("Tuesday");
//     case 4:
//         console.log("Wednesday");
//     case 5:
//         console.log("Thursday");
//     case 6:
//         console.log("Friday");
//     default:
//         console.log("Saturday")
// }

// with break
// let day = 1;

// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     default:
//         console.log("Saturday")
// }



// -----------------Truthy falsy--------------


//falsy value:- false,0,"",-0,BigInt 0n,null,undefined,NaN
//truthy value:- true,"0","false"," ",[],{}, function(){}


// const userEmail="";
// if(-0){
//     console.log("Got it");
// }else{
//     console.log("Not got");
// }


// ----------to check array is empty---------

// const array=[1];
// if(array.length===0){
//     console.log("array is empty");
// }

// ----------to check object is empty---------

// const obj={
//     1:"Sujit"
// };
// console.log(Object.keys(obj))//return array

// if((Object.keys(obj)).length===0){
//     console.log("obj is empty");
// }

// console.log(false==0);
// console.log(0=="");
// console.log(false=="")
// console.log(false=="false")


// let num =2^3;
// console.log(num)
// 010
// 011
// 001

//nullish coalesing operator ?? null undefined;
// value aa gayi hai db se to jo pehle aaya hai use assign kardo 

// let val1;
// val1=5 ?? 10;
// val1=null ?? 10;
// val1= undefined ?? 10;
// val1=null?? undefined;


// console.log(val1);

// ----------------ternary operator-------

// short hand of if else

// let age=10;
// let voting=(age>18)?true:false;
// console.log(age);
// console.log(voting);