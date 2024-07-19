//this keyword --------current context(value) ko refer karta hai

// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object. ie window
// In a function, this refers to the global object.ie window
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


// when used in the ide it refers to empty object

console.log( this)

// when in console it refers to window Object


console.log(window);//it is same as of this

console.log(typeof window);

console.log(typeof this);

console.log(window===this)//true


function myfunc(){
    "use strict";

    // console.log("Hello world")
    console.log(this)
}
myfunc()
//these are same
// window.myfunc()
//print window object in this

//myfunc is present in window object


