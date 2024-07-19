//for loop in array

const fruits=["apple","mango","grapes","banana"]
// console.log(fruits.length)
const upperarr=[];
for(let i=0;i<fruits.length;i++){
    // console.log(i);
    //array indexing
    // console.log(fruits[i]);
    upperarr.push(fruits[i].toUpperCase())
}
// console.log(fruits[fruits.length])


console.log(upperarr)





// use const for creaing Array

const array=[1,2,3,4];

//heap memory [1,2,3,4] 0X111

//if i push something to the array then the value is pushed to array but in naot changing the address of array ie 0X111

array.push(5);
console.log(array)

//but assignment to it is  not permittable ie
// array=[1,2,3];//assignment to constant variable
// console.log(array)


//while loop in array

const items=["item1","item2","item3"];
const item2=[];
let i=0;
while(i<items.length){
    item2.push(items[i].toUpperCase());
    i++
}
console.log(item2);





//for of loop--------it returns array value and not index

const vehicles=["bike","truck","car"];
for (let vehicle of vehicles) {
    console.log(vehicle);
}


// for in loop--------it returns index and not array value

const names=["Sujit","Jilajit","Ajit","Vikas"];

for (const name in names) {
    console.log(name)
}
// let a=[]
//to get array values
for (const name in names) {
    // a.push(name.toUpperCase())
    console.log(names[name])
}

// console.log(a)

//for loop or for of loop is mostly used

