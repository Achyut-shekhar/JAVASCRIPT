//map:-it creates a new array with tthe result of some operation.the value it calls back return its value to a new array

let nums=[23,34,45];

const newrray=nums.map((val)=>{
    console.log(val);
    return val;  //if we dont use return val it will not return the value
})

console.log(newrray);

//filter:- creates a new array of elements that give true for condition

let filterarray=nums.filter((val)=>{
    return val%2==0;
})

console.log(filterarray);//it helps to create a new array from exisiting array to fetch some data passing some condition


//REDUCE:- performs some operation and reduce the array to a single value.it returns that single value

//it is used when we are doing many operations  but at last we have one output like average sum of array

let arr=[1,2,3,4,5];

let output =arr.reduce((res,curr)=>{
    return res+curr;
});

console.log(output);
//in this res is the first value or the result of the (res+curr)and curr moves forward in a array 

// example 2

let a=[1,2,34,4];

let outcome=a.reduce((res,curr)=>{
    return res>curr?res:curr;
})
console.log(`example 2 ${outcome}`);

//in this it compare the array gives maximum element. it is comparing the consition and if the consdition is true it return the value of res and if not then curr