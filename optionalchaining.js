let user = {
    name: "sujit",
    age: 20,
    // address: {
    //     street: "xyz",
    //     city: "pune",
    //     state: "maharashtra"
    // }
};



console.log(user.name)//sujit
console.log(user.address)//undefined

console.log(user.address.street);//error

//undefined par key acces karenge to error dega
//error na de undefined dega to chalega

//optional chaining operator ?.

console.log(user?.address?.street);