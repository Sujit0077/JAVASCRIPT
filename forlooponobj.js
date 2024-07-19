const users = 
    {
        name: "Sujit",
        age: 22,
        gender: "male"
    };
  
let a=[1,2,3,4,5,6]
// for (let i = 0; i <users.length; i++) {
//     console.log(users[i])
// }

// for (const user of users) {
//     console.log(user);
// }
for (const key in users) {
    console.log(users[key])
}
// for (const user of a) {
//     console.log(user);
// }


for (const item in a) {
    console.log(item);
}