function hello() {
    console.log("Hello World")
}
hello()
//javascript functions are functions as well as an Object

//for ex
// console.log(hello["name"])//accessing property


// we can add our own property to the function

// hello.myOwnProperty="My Property"
// console.log(hello.myOwnProperty)

// name property--->tells function name

//it provides more useful properties

//function provide us the free space

//free space kya hai ek object hai {}

//aur us object ko hum bolte hai prototype

//only function provide prototype property
// console.log(hello.prototype)
if (hello.prototype) {
    console.log("prototype is present")
} else {
    console.log("prototype is not present")
}
const h1 = {
    key1: "value1"
}

if (h1.prototype) {
    console.log("prototype is present")
} else {
    console.log("prototype is not present")
}

let arr = [1, 2, 3]
if (arr.prototype) {
    console.log("prototype is present")
} else {
    console.log("prototype is not present")
}

//proto and prototype is different

hello.prototype.abc = "ABC"
console.log(hello.prototype)//{ abc: 'ABC' }
hello.prototype.Sujit = "Gupta"
console.log(hello.prototype)//{ abc: 'ABC', Sujit: 'Gupta' }

hello.prototype.sing = function () {
    return "la la la la la";
}
console.log(hello.prototype)//{ abc: 'ABC', Sujit: 'Gupta', sing: [Function (anonymous)] } 
console.log(hello.prototype.sing())//la la la la la
console.log("+++++_________++++++_______+++++_______+++++++_________++++++")
// const userMethods = {

//     about: function () {
//         return `First name is ${this.firstName} and age is ${this.age}`;
//     },
//     is18: function () {
//         return this.age > 18;
//     },
//     sing:function(){
//         return  `la la la la la la la la ${this.firstName}`
//     }

// }

function createUser(firstName, lastName, email, age, address) {
    // const user = Object.create(userMethods);//set proto property for usermethods
    const user=Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}



console.log(createUser.prototype)//{}



createUser.prototype.about = function () {
    return `First name is ${this.firstName} and age is ${this.age}`;
}


createUser.prototype.is18 = function () {
    return this.age > 18;
}


createUser.prototype.sing = function () {
    return `la la la la la la la la ${this.firstName}`
}



console.log(createUser.prototype)
//  {
//     about: [Function (anonymous)],
//     is18: [Function (anonymous)],
//     sing: [Function (anonymous)]
//   }



let user1 = createUser("Sujit", "Gupta", "Abc@gmail.com", 22, "XYZ");
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
//First name is Sujit and age is 22
// true
// la la la la la la la la Sujit


let user2 = createUser("Mohit", "Vashitha", "Ab@gmail.com", 2, "XZ");
console.log(user2.about());
console.log(user2.is18());
console.log(user2.sing());

// First name is Mohit and age is 2
// false
// la la la la la la la la Mohit

console.log(user1.__proto__)