//array destructuring


let arr=[1,2,3,4]
let [var1,var2,...var3]=arr;
console.log(var1,var2);
console.log(var3);


//object destructuring
let obj={
    1:"item1",
    two:"item2",
    3:"item3",
    4:"item4"
};
console.log(obj)
let {1:var4,...var5}=obj;
console.log(var4);
console.log(var5);
// console.log(obj["2"])
console.log(obj["two"]);

for(let key in obj){
    console.log(key,obj[key])
}

let str="sujit";
let [...vaar1]=str
console.log(vaar1);



let obj1=new Object({1:"Sujit",2:"Gupta"});
console.log(obj1[1]);

// let myarr=[1,2]
let myarr=["h","i"]
// console.log(myarr.join(""))//hi
// console.log(myarr.join(""));//12

// const merged=Object.assign(obj1,obj)
const merged=Object.assign({},obj1,obj)

console.log(merged)

// console.log(obj1)


let m1=Object.create({"m":2,"n":3})

console.log(m1)


const mysym=Symbol("key1")
const jsuser={
    name:"sujit",
    age:20,
    gender:"male",
    [mysym]:"hello"
}
// jsuser[mysym]="hello"
jsuser.name="mohit"
console.log(jsuser)

//how to change object key name




jsuser.aa=jsuser.name
delete jsuser.name
console.log(jsuser);

function calculatecartprice(...num1){
    let total=0;
    for(let n of num1){
        total+=n;
    }
    return total;
}

console.log(calculatecartprice(1,2,3,4,5,6,7,8,9,10))






let arrpr=[1,2,3,5,6,7,8,9]

