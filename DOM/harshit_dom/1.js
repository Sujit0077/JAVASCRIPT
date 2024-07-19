//DOM-----Document Object Model

// overview
//how to use
//detail study

//select element by id

// const mainHeading=(document.getElementById("main-heading"));
// console.log(mainHeading);

//select element by query selector
// const mainHeading2=(document.querySelector("#main-heading"));
// console.log(mainHeading2);

// const header=document.querySelector(".header")
// console.log(header);

// const navitem=document.querySelector(".nav-item")
// console.log(navitem);


//select multiple elements by query selector
// const allnavitem=document.querySelectorAll(".nav-item");
// console.log(allnavitem);



// const mainheading=document.getElementById("main-heading");
// console.log(mainheading);
// console.log(mainheading.textContent)
// mainheading.textContent="This is something else"
// console.log(mainheading.textContent)

//change the styles of elements
// const mainHeading=document.querySelector("div.headline h2");
// console.log(mainHeading);
//how to get styles of the element

// console.log(mainHeading.style)//object
// mainHeading.style.color="blue"
// mainHeading.style.backgroundColor="yellow";
// mainHeading.style.border="10px solid black";



//attributes


// const links=document.querySelector("a");
// console.log(links);
// console.log(links.getAttribute("href"))//#home
// console.log(links.getAttribute("href").slice(1))//home

// links.setAttribute("href","https://codprog.com");
// console.log(links.getAttribute("href"))

// const inputele=document.querySelector(".form-todo input")
// console.log(inputele.getAttribute("type"));



//get multiple elements using getElements by class name
//get multiple elements using querySelectorAll

// const navitem=document.getElementsByClassName("nav-item a")
// console.log(navitem);


// let navitem=document.getElementsByTagName("a")
// console.log(navitem);


// console.log(navitem.length);
// console.log(typeof navitem);
// console.log(Array.isArray(navitem));
// console.log(navitem[1]);

// let navitem=document.querySelectorAll(".nav-item a");
// console.log(navitem);
// console.log(typeof navitem);

// console.log(navitem[1]);
// console.log(navitem.length);
// console.log(typeof navitem);
// console.log(Array.isArray(navitem));


//loop

// for(let i=0;i<navitem.length;i++){
//     console.log(navitem[i]);
//     navitem[i].style.color="red";
//     navitem[i].style.backgroundColor="white"
//     navitem[i].style.padding="10px"
//     navitem[i].style.fontWeight="bold"
// }


// for(let nav of navitem){
//     // console.log(nav);
//     nav.style.color="red";
//     nav.style.backgroundColor="white"
//     nav.style.padding="10px"
//     nav.style.fontWeight="bold"
// }

// navitem=Array.from(navitem)
// console.log(typeof navitem);
// console.log(Array.isArray(navitem));


// navitem.forEach((nav)=>{
//     // console.log(nav);
//     nav.style.color="red";
//     nav.style.backgroundColor="white"
//     nav.style.padding="10px"
//     nav.style.fontWeight="bold"
// })



// innerHTML
// const headline = document.querySelector(".headline");
// console.log(headline)

// console.log(headline.innerHTML)

// headline.innerHTML = "<h1> Inner html </h1>"

// console.log(headline.innerHTML)

// headline.innerHTML += "<button class='btn btn-headline'>Learn More</button>";

// console.log(headline.innerHTML)
