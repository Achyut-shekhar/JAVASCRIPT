console.log(`hello`);
window.console.log(`hello1`);
document.body.style.background="blue"//here we are changing the background in js only with the help of DOM

document.body.childNodes[3].innerText="abcd";//here we are changing the text

//DOM Manipulation

//selection by id
let heading=document.getElementById("myid");//it will return the h1
console.dir(heading) //this print the properties of that document

//selection by class

let classheading=document.getElementsByClassName("id");
console.dir(classheading); //it gives html collection which have 1st 2nd and 3rd heading and all it property.it gives information as an array which have index.therefore its very similar to array

//selection by tag
let para=document.getElementsByTagName
("p");
console.dir(para);//it gives all the details of "p" in the form of html collection

//Query Selector

let elements=document.querySelector("p");//it returns the first elemnt matching the "p" tag in the document
console.dir(elements);

let allele=document.querySelectorAll("p");//it gives all the element matching "p" tag and present as a nodelist
console.dir(allele);
 elements=document.querySelector(".id");//it returns the first elemnt matching the ".id" tag which is h1 in the document
console.dir(elements);

 allele=document.querySelectorAll(".id");//it gives all the element 
console.dir(allele);