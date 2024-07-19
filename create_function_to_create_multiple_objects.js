// const user1={
//     firstName:"Sujit",
//     lastName:"Gupta",
//     email:"Sujt@gmail.com",
//     age:22,
//     address:"Bla bla",
//     about:function(){
//         return `First name is ${this.firstName} and age is ${this.age}`;
//     },
//     is18:function(){
//         return this.age>18;
//     }
// }

// for multiple users its not efficient way so we will create a function that takes input for all the key values and returns the object


// function createUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=function(){
//         return `First name is ${this.firstName} and age is ${this.age}`;
//     };
//     user.is18=function(){
//         return this.age>18;
//     }
//     return user;
// }


// let user1=createUser("Sujit","Gupta","Abc@gmail.com",22,"XYZ");
// console.log(user1.about())
// console.log(user1.is18())

// let user2=createUser("Mohit","Vashitha","Ab@gmail.com",2,"XZ");
// console.log(user2.about())
// console.log(user2.is18())

//its good but the method about and is18 is getting created for every user as these methods are same for all user so if we create multiple user these will cause memory to be full


//so what will do is will make this methods separately and assign their reference to the object

// they work individually too but will assign them is an object called usermethods

// function about(){
//     return `First name is ${this.firstName} and age is ${this.age}`;
// };
// function is18(){
//     return this.age>18;
// }


// const userMethods = {

//     about: function () {
//         return `First name is ${this.firstName} and age is ${this.age}`;
//     },
//     is18: function () {
//         return this.age > 18;
//     }

// }

// function createUser(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     // user.about = about;
//     // user.is18 = is18;

//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// let user1 = createUser("Sujit", "Gupta", "Abc@gmail.com", 22, "XYZ");
// console.log(user1.about())
// console.log(user1.is18())

// let user2 = createUser("Mohit", "Vashitha", "Ab@gmail.com", 2, "XZ");
// console.log(user2.about())
// console.log(user2.is18())


//it works too but the drawback is that if we want to include multiple methods in an object this is not better approach and suppose we had declared a method in usermethods and have not included them in the user object it will throw undefined so to do this we will use Object.create that gives refernce to other object 

const userMethods = {

    about: function () {
        return `First name is ${this.firstName} and age is ${this.age}`;
    },
    is18: function () {
        return this.age > 18;
    },
    sing:function(){
        return `La la la lall lalla alla lalalal`
    }

}

function createUser(firstName, lastName, email, age, address) {
    // const user = {};
    const user=Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = about;
    // user.is18 = is18;

    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

let user1 = createUser("Sujit", "Gupta", "Abc@gmail.com", 22, "XYZ");
console.log(user1.about());
console.log(user1.is18());
let user2 = createUser("Mohit", "Vashitha", "Ab@gmail.com", 2, "XZ");
console.log(user2.about());
console.log(user2.is18());
// console.log(user1.sing());//undefined

console.log(user1.sing());
console.log(user1.__proto__)



const obj1={
    key1:"value1",
    key2:"value2"
}
// const obj2={
//     key3:"value3"
// }


// console.log(obj2.key3)
// console.log(obj2.key1)//undefined
//i dont want undefined but want js to reference the obj1 for key1

// const obj2={}
// obj2.key3="value3"

// console.log(obj2.key3)
// console.log(obj2.key1)//undefined

const obj2=Object.create(obj1);
console.log(obj2)//{}
obj2.key3="value3"

console.log(obj2.key3)//value3
console.log(obj2.key1)//value1


console.log(obj2.__proto__)//{ key1: 'value1', key2: 'value2' }