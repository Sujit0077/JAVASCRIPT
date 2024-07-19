// const obj={
//     bandName:"sujit",
//     songName:"sujitsong"
// };
//first method

// let var1=obj.bandName;
// let var2=obj.songName;

// console.log(var1);
// console.log(var2);

//second method

// let {var1,var2}=obj;

// console.log(var1);//undefined
// console.log(var2);//undefined

// let {bandName,songName}=obj;//you have to use keys of obj

// console.log(bandName);
// console.log(songName);

//what if i don want to use keys as variable
// let {bandName: var1, songName: var2}=obj;//you have to use keys of obj

// console.log(var1);
// console.log(var2);




// --------------------------------suppose----------------

const obj={
    bandName:"sujit",
    songName:"sujitsong",
    year:2002,
    hobby:"Cricket"
};
// var [...a]=obj;
// console.log(a)//error not iterable
// let {bandName:key1,songName:key2}=obj;
// console.log(key1,key2);

//what if i want to store other keys too
let {bandName:key1,songName:key2,...key3}=obj;

console.log(key1,key2);
console.log(key3);