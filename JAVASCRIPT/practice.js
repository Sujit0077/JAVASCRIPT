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