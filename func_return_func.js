// function return array string numbers objects so they can also return functions


//these are higher order functions


function hi(){
    function hello(){
        console.log("hello");
    }
    return hello;
}
// 
let ans=hi();
console.log(ans);
ans()