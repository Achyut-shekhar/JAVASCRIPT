let n=prompt("enter the number");
let arr=[];
for(let i=1;i<=n;i++){
     arr[i-1]=i;
}
console.log(arr);

//sum of all numbers in an array

let sum=arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(`value of the elements ${sum}`);

//for products of elements

let product=arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(`products of the elements ${product}`);