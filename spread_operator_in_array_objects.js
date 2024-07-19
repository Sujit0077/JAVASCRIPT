//spread operator in array


// let num1=[1,2,3];
// let num2=[4,5,6];

// let str1="abc";
// const newarray=[...str1]
// console.log(newarray)
// const new1=[..."abc"];
// console.log(new1);

// let num3=[...num1,...num2];
// console.log(num3);


// let num4=[...num1,...num2,7,8,9];
// console.log(num4);

//spread operator in object;

// const obj1={
//     key1:"value1",
//     key2:"value2"
// };
// const obj2={
//     key3:"value3",
//     key4:"value4"
// };
// const obj3={...obj1,...obj2};
// console.log(obj3);

//the keys in obj are unique and if added it will override the previous one
const obj1={
    key1:"value1",
    key2:"value2",
    // key1:"value3"
};
// console.log(obj1); //output: { key1: 'value3', key2: 'value2'}

//what if i have key1 in 2nd object and spread it in obj3 it will agin override the value based on the order the objects are spread

const obj2={
    key1:"valueobj2",
    key3:"value3",
    key4:"value4"
};
//const obj3={...obj1,...obj2};
//{ key1: 'valueobj2', key2: 'value2', key3: 'value3', key4: 'value4' }

//what if i change the order 

// const obj3={...obj2,...obj1};
//{ key1: 'value1', key3: 'value3', key4: 'value4', key2: 'value2' }

console.log(obj3);
