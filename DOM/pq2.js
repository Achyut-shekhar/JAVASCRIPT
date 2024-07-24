//create 3 div with common class name-"box". access them and add some unique text to each of them

let div=document.querySelectorAll(".box")
console.dir(div);

// div[0].innerText="new unique 1";
// div[1].innerText="new unique 2";
// div[2].innerText="new unique 3";

//doing same with the help of loop

let index=0;
for(box of div){
    box.innerText=`new unique value ${index}`
    index++;
}
