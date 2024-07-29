let newbtn=document.createElement("button")
newbtn.innerText="click me"
console.dir(newbtn);
console.log(newbtn.innerText);

//node.append
let div=document.querySelector("div");
div.append(newbtn);
div.style.color="white"
div.style.display="flex"
div.style.flexDirection="column"
div.style.justifyContent="center"
div.style.alignItems="center"
//centering the button

//node prepend 
let newheading=document.createElement("h1");
newheading.innerHTML="<i>hi, i am new</i>";

document.querySelector("body").prepend(newheading);

//remove
let para=document.querySelector("p");
para.remove();//removes the paragraph