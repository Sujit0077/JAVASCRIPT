//let and const are block scope and var is function scope

{
    let h1="sujit";
    console.log(h1);//accessible
}
// console.log(h1)//not accessible also same for const




{
    var h2="sujit";
    console.log(h2);//accessible
}
console.log(h2)//accessible because var is function scope



function h3(){
    // let h13="sujit"
    if(true){
        // var h13="sujit";
        console.log(h13);//accessible
    }
    console.log(h13);//accessible
}
h3();

// console.log(h13)//not accessible because var is function scope and it is not accessible outside the function
