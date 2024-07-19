// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`,c);

// };
// myfunc(1,2,3,4,5,6,7,8,9)

let addAll=(...numbers)=>{
    let sum=0;
    for(let number of numbers){
        sum=sum+number;
    }
    return sum;
}
console.log(addAll(1,2,3,4,5,7));




//rest parameter is used to gather all elements
//whereas spread operator is used to spread the array and objects