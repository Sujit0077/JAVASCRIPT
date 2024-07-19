//useful in real world application

let users = [
    {
        user_id: 1,
        firstName: "Sujit",
        gender: "male"
    },
    {
        user_id: 2,
        firstName: "Mohit",
        gender: "male"
    },
    {
        user_id: 3,
        firstName: "Ajit",
        gender: "male"
    }
]
console.log(Array.isArray(users))//true
//iterating the array
for(let i=0;i<users.length;i++){
    console.table(users[i]);
}
console.log("-------------------using dot");
//iterating objects inside an array using dot notation
for(let i=0;i<users.length;i++){
    console.log(users[i].firstName);
}
console.log("----------------using bracket");
//iterating objects inside an array using bracket notation
for(let i=0;i<users.length;i++){
    console.log(users[i]["firstName"]);
}

