// ------------First method using slice method------------

// let array1=["Item1","Item2"];
// //console.log(typeof array1.slice(0));//slice method returns an array
// // console.log(array1.slice(0));

// let array2=array1.slice(0);
// console.log(array2);

// console.log(array1===array2)//false
// array1.push("Item3");

// console.log(array1);
// console.log(array2); //array2 is not affected by the push operation on array1



// ------------Second method using concat method------------

// let array1=["Item1","Item2"];

// let array2=[].concat(array1);
// console.log(array2);

// console.log(array1===array2)//false
// array1.push("Item3");

// console.log(array1);
// console.log(array2); //array2 is not affected by the push operation on array1


// ------------Third method using spread operator------------

// let array1=["Item1","Item2"];

// let array2=[...array1];
// console.log(array2);

// console.log(array1===array2)//false
// array1.push("Item3");

// console.log(array1);
// console.log(array2); //array2 is not affected by the push operation on array1


// -------------task-----------------
//clone the array and add 1 or more extra element

let array1=[1,2,3,4]
//first method using slice and concat method
let array2=array1.slice(0).concat("Item3");
console.log(array2);
//second method using spread operator 
let array3=[...array1,"Item3"];
console.log(array3);
//third method using slice method and then push method
let array4=array1.slice(0);
array4.push("Item3");
console.log(array4);
//fourth method using concat method 
let array5=[].concat(array1,"Item3");
console.log(array5);