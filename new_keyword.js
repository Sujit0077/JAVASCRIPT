// new keyword

function createUser(firstName,age){
    this.firstName=firstName;
    this.age=age;
}

const user1=new createUser("sujit",22);
createUser.prototype.about=function(){
    console.log(this.firstName,this.age)
}
console.log("+++++_________++++++_______+++++_______+++++++_________++++++")

console.log(user1)


// 3. new keyword khud hi about method ko link kardega create user ke proto ko
// hume ye karne ki jarurat hi nahi hai   
// const user=Object.create(createUser.prototype);
console.log("+++++_________++++++_______+++++_______+++++++_________++++++")

console.log(user1.__proto__)


// new keyword yaha par tin kam kar raha hai
// 1. Empty object create kar raha hai aur uski value hai this matlab this={}
// 2. Return this
// 3. upar     const user=Object.create(createUser.prototype);
console.log("+++++_________++++++_______+++++_______+++++++_________++++++")

console.log(user1)
user1.about()

console.log("+++++_________++++++_______+++++_______+++++++_________++++++")



//now lets re modify again the prototype.js




//constructor function
//use capital letter begining make understand that it should be called using new keyword 
function CreateUser(firstName, lastName, email, age, address) {
    // const user = Object.create(userMethods);//set proto property for usermethods
    // const user=Object.create(createUser.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return user;
}

console.log(CreateUser.prototype)//{}

CreateUser.prototype.about = function () {
    return `First name is ${this.firstName} and age is ${this.age}`;
}

CreateUser.prototype.is18 = function () {
    return this.age > 18;
}

CreateUser.prototype.sing = function () {
    return `la la la la la la la la ${this.firstName}`
}

console.log(CreateUser.prototype)
//  {
//     about: [Function (anonymous)],
//     is18: [Function (anonymous)],
//     sing: [Function (anonymous)]
//   }

let user_1=new CreateUser("Sujit", "Gupta", "Abc@gmail.com", 22, "XYZ");
console.log(user_1.about());
console.log(user_1.is18());
console.log(user_1.sing());
//First name is Sujit and age is 22
// true
// la la la la la la la la Sujit


let user_2 = new CreateUser("Mohit", "Vashitha", "Ab@gmail.com", 2, "XZ");
console.log(user_2.about());
console.log(user_2.is18());
console.log(user_2.sing());

// First name is Mohit and age is 2
// false
// la la la la la la la la Mohit



//hasOwnProperty


//suppose i want to check key of user_1 as it is object for in loop works


for(let key in user_1){
    console.log(key)
}

// firstName
// lastName
// email
// age
// address
// about
// is18
// sing

// here user_1 has only 

// firstName
// lastName
// email
// age
// address

// and not 

// about
// is18
// sing 
// as they are prototype

// so if want only this

// firstName
// lastName
// email
// age
// address
//we'll use hasOwnProperty
console.log("---------------")
for(let key in user_1){
    if(user_1.hasOwnProperty(key)){
        console.log(key)
    }
}