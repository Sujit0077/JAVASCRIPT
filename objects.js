//objects---------object literals------reference types
//not accessible using index
//the keys in objects are always in string
//if you want to add spaced keys then use double quotes

//how to create objects
// let person={
//     name:"Sujit",
//     age:22,
//     "person hobbies":["Cricket","Football"]
// };
// console.table(person);

//how to access a object------using dot notation and bracket notation

// console.log(person.name);
// console.log(person["age"])


//how to add new key value pair to an object using dot notation and bracket notation
// 
// person.gender="male";
// console.table(person)
// person["hobbies"]=["coding","cricket","music"];
// console.log(person)

//how to access a value stored in an array inside an object using dot and bracket notation

// console.log(person.hobbies[0]);
// console.log(person["hobbies"][1])



// let num={
//     1:"one",
//     2:"two"
// };
// console.log(num["1"])
// console.log(num[1]);



//difference between dot and bracket notation

//suppose mujhe add karna --person hobbies-- as key jo ki mane kardiya hai


// 1st diference
// [] is used to access spaced keys it cannot be accessed using . 

// console.log(person["person hobbies"]);


// 2nd difference

//there is a variable key with value email 
//and task is to add the value email as a key to the object and store some email like abx@gmail.com


//hit and try

//using dot
let key="email";
// person.key="abc@gmail.com";
// console.log(person)//this output was not required

//using bracket

// person["key"]="abc@gmail.com";
// console.log(person)//this output was not required

//final

// person[key]="abc@gmail.com";
// console.log(person)//this output was required






// +++++++++++++++++++++++++How to iterate object+++++++++++++++++++++

let person={
    name:"Sujit",
    age:22,
    "person hobbies":["Cricket","Football"]
};


// 1. for in loop 
// 2 Object.keys

// 1

for (let key in person){
    console.log(key);//only giving keys
    // console.log(person.key)//3 times undefined bcoz the loop is searching for the key named key
    // console.log(key,person[`${key}`]);
    console.log(key,person[key])
    // console.log(`${key} : ${person[key]}`)
}

//2
console.log(Object.keys(person));
console.log(typeof Object.keys(person));
console.log(Array.isArray(Object.keys(person)));


for(let key of Object.keys(person)){
    console.log(key,":",person[key]);
}
// for(let key in Object.keys(person)){
//     console.log(person[key]);
// }