//mostly used in objects and react

//convenient way to extract value from objects or arrays passed as a function arguments


function process({id,details:{name,age},scores:[s1,s2,s3]}){
    console.log(id);
    console.log(name,age);
    console.log(s1,s2,s3);
}

const data={
    id:1,
    details:{
        name:"Sujit",
        age:28
    },
    scores:[1,2,3]
};

process(data)


function arr([a,b,c,...d]){
    return a+b+c,d;
}
console.log(arr([1,2,3,4,5]))


const suj={
    one:"sujit",
    two:"gupta"
}

function dd({one,two}){
    console.log(one,two)
}
dd(suj)