//events

//3 ways

// 1

//<button class="btn btn-headline" onclick="console.log('You clicked me')">Learn More</button>

//2

// const btn=document.querySelector(".btn-headline")

// console.log(btn);
// console.dir(btn)

// btn.onclick=function(){
//     console.log("you click")
// }


//3---addEventListener

// const btn=document.querySelector(".btn-headline");
// btn.addEventListener("click",()=>{
//     console.log("you clicked")
// })


//this

// const btn=document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//     console.log("you clicked")
//     console.log(this)
// })

//normal function mai this ka value wohi hoga jispar addeventlistener laga hai 

const btn=document.querySelector(".btn-headline");
btn.addEventListener("click",()=>{
    console.log("you clicked")
    console.log(this)
})
//arrow function mai this ka value isbar window hoga ie ek level up 

