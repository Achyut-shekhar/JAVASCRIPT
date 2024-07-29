let newbtn=document.createElement("button")
newbtn.innerText="click me!";

newbtn.style.backgroundColor="red";
newbtn.style.color="white";

document.querySelector("body").prepend(newbtn)//before adding we have to select the part where we want to add.