//default parameter

//suppose you have define a function with 2 parameters and you are passing only value of one variable then the defaukt parameters come into picture and assign the default value declare

//for ex


function add(num1=9,num2=1){
    console.log(num1+num2);
}
// add(4,5)//passed 2 arguments

//suppose num2 is is not passed as arguments
// then you can assign default value in the parameter suppose num2=1
add(4)//5
add(undefined,4);//13

add()//10


//ES5

function twoadd(num1,num2){
    if(num1===undefined ){
        num1=9
    }else if(num2===undefined){
        num2=4;
    }
    console.log(num1+num2)
}
twoadd(4,5)
twoadd(4)
twoadd(undefined,4)