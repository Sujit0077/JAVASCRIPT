const rootNode=document.getRootNode()
// console.log(rootNode);//document
// console.log(rootNode.childNodes);//html

const htmlelement=rootNode.childNodes[0]//html

// console.log(htmlelement);//html

// console.log(htmlelement.childNodes)//head,textnode,body

const headelement=htmlelement.childNodes[0];
const textNode=htmlelement.childNodes[1];
const bodyElement=htmlelement.childNodes[2]

// console.log(headelement.parentNode)

// console.log(headelement.nextSibling.nextSibling.previousSibling)
// console.log(headelement.previousSibling)

// console.log(headelement.nextSibling)


// console.log(headelement.nextElementSibling)


// console.log(headelement.childNodes)





// task
// const h1head=document.querySelector("h1");
// console.log(h1head)
// const div=h1head.parentNode
// div.style.backgroundColor="#232323"
// div.style.color="white";

// div.parentNode.style.backgroundColor="orange"


const head=document.querySelector("head");
const title=head.querySelector("title");
// console.log(title.childNodes)
// console.log(title.textContent)




// const contain=document.querySelector(".container")
// console.log(contain);
// console.log(contain.childNodes)
// console.log(contain.children)




// classlist


// const sectiontodo=document.querySelector(".section-todo");
// console.log(sectiontodo.classList)

//add
// sectiontodo.classList.add("bg-dark")

//remove
// sectiontodo.classList.remove("container")
// console.log(sectiontodo.classList)


//to check

// console.log(sectiontodo.classList.contains("container"))

//toggle

// sectiontodo.classList.toggle("bg-dark");//add
// sectiontodo.classList.toggle("bg-dark");//remove


// const header=document.querySelector(".header");
// console.log(header.classList)

// header.classList.add("bg-dark")


//adding html element


//using inner html
const todolist=document.querySelector(".todo-list");
// console.log(todolist)
// console.log(todolist.innerHTML)
// todolist.innerHTML=todolist.innerHTML+"<li>todo2</li>";
// todolist.innerHTML+="<li>todo3</li>";



//using document.createElement()

// const newtodoitem=document.createElement("li");
// console.log(newtodoitem);
// const txtnode=document.createTextNode("Todo2");
// newtodoitem.append(txtnode);
// todolist.append(newtodoitem);


//append
// const newtodoitem1=document.createElement("li");
// console.log(newtodoitem1);
// newtodoitem1.textContent="todo3"
// todolist.append(newtodoitem1);


//prepend
// const newtodoitem1=document.createElement("li");
// console.log(newtodoitem1);
// newtodoitem1.textContent="todo3"
// todolist.prepend(newtodoitem1);

//remove

// const todo=document.querySelector(".todo-list li");
// console.log(todo)
// console.log(todo[1])
// todo.remove()
// console.log(todo);

// console.log(todolist)

// const h1=document.createElement("h1");
// h1.textContent="hello";

// todolist.after(h1);
// todolist.before(h1);



//some old methods that support IE
//appendChild

const li=document.createElement("li");
li.textContent="new";
// todolist.appendChild(li)


//insertbefore
const refer=document.querySelector(".first-todo");
// todolist.insertBefore(li,refer)


//replaceChild
// todolist.replaceChild(li,refer)

//removeChild
// todolist.removeChild(refer)


//static list vs live list

const sixthli=document.createElement("li");
// const list =document.querySelectorAll(".todo-list li")
const list=todolist.getElementsByTagName("li")
sixthli.textContent="item 6"
todolist.append(sixthli);
// console.log(list)//NodeList(5) [li, li, li, li, li]
console.log(list)//HTMLCollection(6) [li, li, li, li, li, li]

// nodelist------static list
//htmlcollection------live list 


//how to get dimensions of element

const sectiontodo=document.querySelector(".section-todo");
// const info=sectiontodo.getBoundingClientRect();
const info=sectiontodo.getBoundingClientRect().height;
console.log(info)