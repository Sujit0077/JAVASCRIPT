//lexical scope 
let var1 = "out"

function myapp() {
    // let var1="app"

    const func1 = function () {
        // let var1 = "func1"

        console.log("func1", var1);
    }
    console.log("Hello from myapp");
    let var1 = "a";

    func1();
}

myapp();

//lexical scoping or chaining------if  we are printing a variable inside a function the function will check for the variable in its scope if found it will print and if not found it will search in lexical env in which the function is declared ie outside of it

// ::::here func1 is declared inside myapp and func1 is printing var1 as var1 is not defined in func1 it will search in the lexical env ie inside myapp function as var1 is not present inside myapp it will search in its lexical env ie in to the global scope as its declared then the var1 will be printed
//lexical scope is basically an area where it is declared