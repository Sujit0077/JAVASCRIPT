
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
    constructor(name,age,speed){
        // this.name=name;
        // this.age=age;
        super(name,age)
        this.speed=speed;
    }
    run(){
        return `${this.name} is rummimg at ${this.speed}`
    }
}


const tommy=new Dog("Tommy",2,45)
console.log(tommy)
console.log(tommy.eat())
console.log(tommy.run())