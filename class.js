// class CreateUser{
//     constructor(fn,age){
//         this.fn=fn;
//         this.age=age;
//     }
//     about(){
//         return `${this.fn},${this.age}`
//     }
//     is18(){
//         return this.age>=18;
//     }
// }

// const user1=new CreateUser("sujit",22)
// console.log(user1)
// console.log(user1.about())





// Animal---name,age ,eat()



// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }
//     iscute(){
//         return this.age<=5;
//     }
// }


// const dog=new Animal("Sheru",12)
// console.log(dog)
// console.log(dog.eat())
// console.log(dog.iscute())
// console.log(Object.getPrototypeOf(dog))




//dog----name,age iheritance

//parent class
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is eating`;
    }
    iscute(){
        return this.age<=5;
    }
}

//subclass
class Dog extends Animal{
    
}


const tommy=new Dog("Tommy",2)
console.log(tommy.name)
console.log(tommy.eat())