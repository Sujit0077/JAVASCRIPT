//it is a collection of unique values
//any type primitive as well as referencce

//craeting  set
// 1
const myset= new Set([1,2,3,4]);
// console.log(myset);
// 2
const myset2=new Set();
myset2.add(4)
myset2.add(5);
myset2.add(6);
myset2.add(7);

// console.log(myset2);

//clear

// myset2.clear();
// console.log(myset2);

//delete
// myset2.delete(7);
// console.log(myset2);

//entries
// console.log(myset.entries())

//has
// console.log(myset.has(1))

//size
// console.log(myset.size)

//key
// console.log(myset.keys())
//values

// console.log(myset.values())



//loops


// for(let [x,y] in myset){
//     console.log(x,y);
// }
//nothing in output

for (let x of myset){
    console.log(x);
}

//forEach

myset.forEach((value,key,set) => {
    console.log(value,key,set);
})

//union

const unionSet=new Set([...myset,...myset2]);

// console.log(unionSet);

//intersection
// const intersectionSet=new Set([...myset].filter(x=>myset2.has(x)))

// console.log(intersectionSet);


//difference

const differenceSet=new Set([...myset].filter(x=>!myset2.has(x)))

// console.log(differenceSet);



