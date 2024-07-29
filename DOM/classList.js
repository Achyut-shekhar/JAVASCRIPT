let para=document.querySelector("p");
para.getAttribute("class");
// para.setAttribute("class","newpara")

//here at the starting we will give the attribute we wnt to change.

//as its overwrite the previous class theefore we use class list so we  can have the properties of both the class

//add class
para.classList.add("newpara");

//remove class
para.classList.remove("newpara")