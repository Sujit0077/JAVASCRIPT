//it holds key value pairs
//it store keys of various data types

//create
//1
const mymap=new Map([
    ["firstName","Sujit"],
    ["lastName","Gupta"],
    ["age",22],
    ["address","Pune"],
    ["hobbies",["reading","painting","cooking"]]
]);

// console.log(mymap);

//2
const mymap2=new Map();
mymap2.set("firstName","Sujit");
mymap2.set("lastName","Gupta");

// console.log(mymap2);

//exiting change
// mymap2.set("firstName","Sujit Gupta")
// console.log(mymap2);

//access
// console.log(mymap2.get("firstName"));


//size
// console.log(mymap2.size);

//clear

// mymap2.clear();
// console.log(mymap2);

//delete

// mymap2.delete("firstName");
// console.log(mymap2);

//entries

// console.log(mymap2.entries());

//has
// console.log(mymap.has("firstName"));

//keys
// console.log(mymap.keys());
//values
// console.log(mymap2.values())



//loops

for(let [x,y] of mymap){
    // console.log(x,y)
}

// for(let x in mymap){
//     console.log(x);
// }