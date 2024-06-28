//this keyword --------current context(value) ko refer karta hai

// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object. ie window
// In a function, this refers to the global object.ie window
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


// when used in the browser it referw to empty object

console.log(this)

// when in cole it refers to window Object