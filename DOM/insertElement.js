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