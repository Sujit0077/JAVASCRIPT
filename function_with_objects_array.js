

//function with objects
const obj={
    name:"sujit",
    age:20,
    gender:"male"
}
function handleobject(anyobj){
    console.log(`Name is ${anyobj.name} age is ${anyobj.age} and is ${anyobj.gender}`)
}

handleobject(obj);
handleobject({
    name:"sujit",
    age:20,
    gender:"male"
})

//function with array

let arr=[1,2,3,43,54,56,67,87];
function handlearray(anyarray){
    let max=-1;
    for(let arr of anyarray){
        if(arr>max){
            max=arr
        }
    }
    console.log(max);
}

handlearray(arr);

handlearray([1,2,3,43,54,56,67,87]);