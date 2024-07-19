//promise represents eventful completion or failure of an asynchronous
// operation and its resulting value


// 3 state 

// pending : initial state of promise
// fulfilled : operation completed successfully
// rejected : operation failed

// promise constructor takes a function as argument which is called executor function
// const promise1= new Promise(function(resolve,reject){
//     //do an async task
//     //db calls ,cryptography network call
//     setTimeout(()=>{
//         //if task is successful
//         console.log("Async task 1");

//         resolve();
//     },2000)
// });

// promise1.then(function(){
//     console.log("Async 1 resolved");
// })

// new Promise(function(resolve,reject){
//     //do an async task
//     setTimeout(()=>{
//         //if task is successful
//         console.log("Async task 2");

//         resolve();
//     },3000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })



// const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"sujit",age:22})
//     },1000)
// })
// promise3.then(function(user){
//     console.log(user)
// })


// const promise4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//        let error =true;
//        if (!error){
//         resolve({username:"sujit",age:22})
//        }else{
//         reject("ERROR:Something went Wrong")
//        }
//     },1000)
// })
// promise4.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.error(err);
// }).finally(function(){

//     console.log("This will always run");
// })




const promise5 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "GUPTA", age: 22 })
        } else {
            reject("ERROR:GUPTA went Wrong")
        }
    }, 1000)
});


// async function consumepromise5(){
//     try {
//         const response=await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumepromise5();


// async function getalluser(){
//    try {
//     const res=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await res.json();
//     console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }

// getalluser();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

