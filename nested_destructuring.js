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


//return all object in separete variable

// let [var1,var2,var3]=users;
// console.log(var1);
// console.log(var2);
// console.log(var3);


//console.log(Array.isArray(var1));//false

//storing all keys in different variables for each users

// const [
//     { firstName: u1fn, user_id: u1id, gender: u1gd },
//     { firstName: u2fn, user_id: u2id, gender: u2gd }, 
//     { firstName: u3fn, user_id: u3id, gender: u3gd }
// ] = users;
// console.log(u1fn, u1id, u1gd);
// console.log(u2fn, u2id, u2gd);
// console.log(u3fn, u3id, u3gd);

//storing one key in a variable and others are spreading
// const [
//     { firstName: u1fn, ...sp1 },
//     { firstName: u2fn,...sp2}, 
//     { firstName: u3fn, ...sp3 }
// ] = users;
// console.log(u1fn);
// console.log(u2fn);
// console.log(u3fn);

// console.log(sp1);
// console.log(sp2);
// console.log(sp3);
