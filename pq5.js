let items=[250,645,300,900,50];

let index=0;
for(let val of items){
    let offer=val/10;
    val=val-offer;
    console.log(`value at index ${index}=${val}`);
    index++;
}