class Person{
    constructor(fn,age){
        this.fn=fn;
        this.age=age;
    }
    static var1="sujit";
    eat(){
        return `${this.fn} is eating`
    }

    static classinfo(){
        return `this is a person class`
    }
}

const Person1=new Person("sujit",22)
console.log(Person1)
console.log(Person1.eat())


//here the eat method is related to the Object Person1 and can only be called using object
//suppose we want that the method is related to class Person and there is no need to create object to call these method we can call it by using class name this is done by using static keyword
// console.log(Person1.classinfo())//error cannot be called using object

console.log(Person.classinfo())
console.log(Person.var1)