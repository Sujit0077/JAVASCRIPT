let users = {
    firstName: "Sujit",
    age: 22,
    lastName: "Gupta"
};


// console.log(users)

// //access

// console.log(users.age)
// console.log(users["lastName"])

for(let user of users){
    console.log(user)
}

// for (let user in users){
//     console.log(user)
// }
// console.log(Object.keys(users))


// let user = new Object({ name: "Sujit" })
// console.log(typeof user);

// for (let users in user) {
//     console.log(users)
// }


let mapuser=new Map([["age",22]])
//adding k-v to map
mapuser.set("firstName","Sujit")
// console.log(mapuser);
//access
// console.log(mapuser.get("firstName"))
// mapuser.clear()
// console.log(mapuser);


// mapuser.delete("age")
// console.log(mapuser)

// console.log(mapuser.entries())


// console.log(mapuser.has("age"))

// console.log(mapuser.keys())
// console.log(mapuser.values())

// console.log(mapuser.size)


// for (const mpu of mapuser) {
//     console.log(mpu)
// }
