//callback function : it is a function that is passed as an arguement to another function and is executed in that function

//these are higher order functions

function greet (name ,callback) {
    console.log(`Hello ${name} ${callback()}`)
}
function saygoodbye(){
    return "Bye"
}
greet("sujit",saygoodbye);//call back function




// -----------------------------remove negative number




function negnumcheck(num){
    return num>=0;
}

function getpos(arr,callback){
    let arrpos=[];
    console.log(callback);
    //ƒ negnumcheck(num){
    //     return num>=0;
    // }
    for(let nums of arr){
        if(callback(nums)){
            arrpos.push(nums);
        }
    }
    return arrpos;
}

console.log(getpos([1,-2,-1,3,2,-3,4,-4,5],negnumcheck))