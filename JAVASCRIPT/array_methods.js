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
    // return (num%2===0)?console.log("Even",index):console.log("odd",index);
    console.log(num > 5, index);
}
numbers.forEach(odeven)
// console.log(numbers)

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

//filter method

//it takes input as a callback function which returns a boolean value and if its true it will store that into an array

let numnegpos=[-1,2,-3,4,-5,6,-7,8,-9]

let pos=numnegpos.filter((num)=>{
    return num<0;
})

console.log(pos);

//reduce method   


//sort method

let numsort=[1,2,3,4,5,6,7,8,9]

let sort=numsort.sort((a,b)=>{
    return a-b;
})

console.log(sort);

// numsort.toSorted()
