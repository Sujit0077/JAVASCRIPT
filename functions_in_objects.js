const object = {
    method: function () {
        console.log("Hello, I'm a method!");
    }
};

object.method(); // prints "Hello, I'm a method!"

//------------------------------------------------------------------------------------------------------------------
const object4 = {
    key1:"value",
    method() {
        console.log("Hello, I'm a method!");
    }
};

object4.method(); // prints "Hello, I'm a method!"
//------------------------------------------------------------------------------------------------------------------

const object3 = {
    key1:"value",
    method: () => {
        console.log("Hello, I'm a method!");
    }
};

object3.method(); // prints "Hello, I'm a method!"
//------------------------------------------------------------------------------------------------------------------

const object2 = {
    property: "I'm a property",
    method: function () {
        console.log(this.property);
    }
};

object2.method(); // prints "I'm a property"
//------------------------------------------------------------------------------------------------------------------

const object1 = {
    method: function (a, b) {
        return a + b;
    }
};

console.log(object1.method(1, 2)); // prints 3
//------------------------------------------------------------------------------------------------------------------


function checkEligiblity() {
    console.log(this);
    if (this.age >= 18) {
        console.log(`${this.firstname} age is ${this.age} eligible for vote`);
    } else {
        console.log(`${this.firstname} age is ${this.age} not eligible for vote`);
    }
}

const user1 = {
    firstname: "Joes",
    age: 35,
    eligiblity: checkEligiblity
}
user1.eligiblity();
const user2 = {
    firstname: "Sara",
    age: 12,
    eligiblity: checkEligiblity
}
user2.eligiblity();










let user={
    firstname:"sujit",
    age:20,
    greet:hello
}

function hello(){
    console.log("hello",this.firstname);
}
user.greet()



// const person={
//     name:"Sujit",
//     age:22,
//     about:()=>{
//         console.log('person name is sujit and the age is 22')
//     }
// }
// person.about()
// person.name="Mohit";
// person.about()//no i want mohit and his age its printing sujits age


// to do that will use this keyword which refers to current context

const person={
    name:"Sujit",
    age:22,
    about: function() {
        console.log(`Person name is ${this.name} and his age is ${this.age}`);
    }
}
person.about()

person.name="Mohit";

person.about()//now it will print mohit and his age as 22