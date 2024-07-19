//immediately invoked function expression

//jaise apne function likha ussey turant hi aapko excute karna hai

//example creating file for db connection

//scenario as our application gets started the db connection should start
//also global scope se pollute se bachna hai



// (function db(){
//     console.log("db connected");
// })()//--------------iife within the () and calling it by ()
(function db(){
    console.log("db connected");
})();
//iife is a function which is called immediately after it is declared

// console.log("hello")
// console.log("hello");
// after iife is executed assign ; to it at the end nahi to wo aagey ka excute nahi karega aur error dega
(function dbc(){
    console.log("dbc connected");
})()

