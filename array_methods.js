//foreach method

const users = [
    {
        firstName: "Sujit",
        age: 22
    },
    {
        firstName: "Mohit",
        age: 23
    },
    {
        firstName: "Rahul",
        age: 24
    }
]

//it takes input as call back function and performs operation on each element of an array and also provide index
// users.forEach((user)=>{
//     console.log(user);
// });

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function odeven(num, index) {
    return (num % 2 === 0) ? console.log("Even", index) : console.log("odd", index);
    // console.log(num > 5, index);
}
numbers.forEach(odeven)
// console.log(numbers)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//map method
//it takes input as a callback function and performs operation on each element of an array and returns new array that contain result
const numbersmap = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//as it returns an array we have to store it in some variable
let maarr = numbers.map((number, index) => {
    return number * 2;

});

console.log(maarr);

const fnobj = users.map((user, index) => {
    return `${user.firstName},${index}`;
})

console.log(fnobj);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//filter method

//it takes input as a callback function which returns a boolean value and if its true it will store that into an array

let numnegpos = [-1, 2, -3, 4, -5, 6, -7, 8, -9]

let pos = numnegpos.filter((num) => {
    return num < 0;
})

console.log(pos);

//reduce method   

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//sort method

let numsort = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numsort.sort((a, b) => {
    return a - b;
})

console.log(numsort);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//find method

let arr = ["tiger", "cat", "dog", "mir"]

let ans = arr.find(function (str) {
    return str.length === 3;
})
console.log(ans);

// let ans1=arr.map(function(str){
//     return str.length===3;
// })
// console.log(ans1);

// let ans3=arr.filter(function(str){
//     return str.length===3;
// })
// console.log(ans3);
// arr.forEach(function(str){
//     console.log( str.length===3);
// })
// // console.log(ans4);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//every method

let number = [3, 1, 7, 4, 5]

let ans1 = number.every((num) => num % 2 === 0);
console.log(ans1);

let ans2 = number.some((num) => num % 2 === 0)
console.log(ans2);



// let ans3=users.every((user)=>{
//     return user.age>=30;
// })
// console.log(ans3);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//reverse arr
let revarr=[1,2,3,4,5,6,7,8,1];
revarr.reverse();
console.log(revarr)

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//splice method
// start delete insert
let splicearr=[1,2,3,4,5,6,7,8,9]

//delete
// let spliceans=splicearr.splice(2,1);//delete and return value at 2 index

//insert
// let spliceans=splicearr.splice(2,0,"insert")no delete only insert at 2nd index

//insert and delete
// let spliceans= splicearr.splice(2,2,3);//delete 2 value and insert one value at index 2
// console.log(spliceans);
// console.log(splicearr);



console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

const mynumber=[1,2,3,4,5,6,7,8,9,10];

let res=mynumber.map((num)=>num+10).filter((num)=>num>15);

console.log(res)
// mynumber.forEach((num)=>console.log(num+10))

console.log(mynumber.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>60))
mynumber.map((num)=>console.log(num*10))



console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


