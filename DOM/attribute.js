let div=document.querySelector("div");
console.log(div);
console.dir(div)

let id=div.getAttribute("id");
console.log(`this is the attribute of id "${id}"`);

//for p
let pa=document.querySelector("p");
console.log(pa);

 let classname=pa.getAttribute("class");
 console.log(classname);

 //name attribute

 let name=div.getAttribute("name");
 console.log(name);

 //Set attribute
 console.log(pa.setAttribute("class","hello"))

 //style
 let sty=document.querySelector("div");

 div.style.backgroundColor="green"//changes the div color in js only
div.style.color="white"
div.innerText="changed in js"
div.style.display="flex"
div.style.justifyContent="center"
div.style.alignItems="center"
//center the content of the div