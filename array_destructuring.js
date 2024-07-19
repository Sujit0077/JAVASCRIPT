//array destrucuring

const myArray=["value1","value2"];

//++++++++++++++++task is to assign value1 to one variable and value2 to another variable+++++++++++++++++

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++first method

// let var1=myArray[0];
// let var2=myArray[1];
// console.log(var1,var2);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++shortcut-----destructure

// let [myvar1,myvar2]=myArray;
// console.log(myvar1,myvar2);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++what if more value 

// const myArray2=["value1","value2","value3"]
// let [a,b]=myArray2;
// console.log(a,b);//here value3 is not considered

// let [myvar3,myvar4,myvar5]=myArray2;
// console.log(myvar3,myvar4,myvar5);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++what if only one value

// const myArray2=["value1"]
// let [a,b]=myArray2;
// console.log(a,b);
// let [myvar3,myvar4,myvar5]=myArray2;
// console.log(myvar3,myvar4,myvar5);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++what if i want to store value1 in myvar1 and value3 in myvar2

// const myArray2=["value1","value2","value3"]
// let [myvar1,,myvar2]=myArray2;
// console.log(myvar1,myvar2);

//++++++++++++++++++++what if i want to store value1 in myvar1 and value2 in myvar2 and rest of the other values into other variable as an array;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++first method using slice method

// const myArray2=["value1","value2","value3","value4"];
// let [myvar1,,myvar2]=myArray2;
// let mynewArray=myArray2.slice(2);

// console.log(myvar1,myvar2);
// console.log(mynewArray);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++second method use spread operator

// const myArray2=["value1","value2","value3","value4"];
// let [myvar1,myvar2,...mynewArray]=myArray2;
// console.log(myvar1,myvar2);
// console.log(mynewArray);











//for practice

// const myArray2=["value1","value2","value3","value4"];

// // let [...mynewArray]=myArray2;
// let mynewArray=[...myArray2]
// console.log(mynewArray)