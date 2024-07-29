//add event listener
let btn1=document.querySelector(".btn1");

btn1.addEventListener("click",()=>{
    console.log("buton 1 was clicked");
});
btn1.addEventListener("click",(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log("buton 1 was clicked - handler2");
});
const handler3=()=>{
    console.log("buton 1 was clicked - handler3");}
btn1.addEventListener("click",handler3);
btn1.addEventListener("click",()=>{
    console.log("buton 1 was clicked - handler4");
});
btn1.addEventListener("click",()=>{
    
    console.log("buton 1 was clicked - handler5");
});

//remove event listener

btn1.removeEventListener("click",handler3);//removed the handler 3

//when we want to remove a handler we need to store that event listener in a variable and we can access that variable to remove the event from a code
