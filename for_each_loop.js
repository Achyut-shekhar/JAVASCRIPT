//for each loop is used for array or any object it takes the element of the array one by one put in the function called in the loop

let arr=[1,2,3,4,5];

arr.forEach(function printval(val,num){
    console.log(`value of the element in the array is ${val} at position${num} `);
   // num is telling the indexing

})

// ARROW FUNCTION METHOD

arr.forEach((val)=>{
    console.log(val);
})

//for strings

 arr=["pune","delhi","mumbai"];

arr.forEach(function printval(val){
    console.log(`value of the element in the array is ${val}`);


})
