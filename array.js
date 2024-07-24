let marks=[12,23,43,43,56];
console.log(marks);
console.log(marks.length);//property

let heroes=["batman","superman","hulk","ironman","black widow"];
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
//for-of
for(let hero of heroes){
    console.log(hero);

}

// ARRAYS METHOD

// push():- add to end
marks.push("66");
console.log(marks);

// pop:-delete from end and return
let deleteditem=marks.pop();
console.log(marks);
console.log(`deleted item is ${deleteditem}`);

// tostring:-converts array to string
console.log(marks.toString());

// concat
let newmarks=[11,22,33,44,55];
console.log(marks.concat(newmarks));

//unshift:-add to start,return the updated length of string
console.log(marks.unshift(2));

//shift:-delete from start and return
console.log(` deleted value from start ${marks.shift()}`);
console.log(`updated array ${marks}`);

//slice:-retrun a piece of array,doesnt change the original array
console.log(marks.slice(1,4))
console.log(`updated with slice ${marks}`)

//splice:-change original array(add,remove,replace)
console.log(marks.splice(2,2,101,102))//it return the deleted value
console.log(`updated with splice ${marks}`);

//add element
marks.splice(2,0,111)
console.log(`add element ${marks}`);


