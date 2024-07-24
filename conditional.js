// if-else statement
let age=7;

if(age>18)
    {
        console.log("you can vote");
    }
    else{
        console.log("you cant");
    }

    // else-if statement 
    let mode="green";
    let color;

    if(mode=="dark"){
        color="black";
    }else if(mode=="light"){
        color="white";
    }else{
        color="default";
    }

    console.log("color=",color);

    // ternary operator
    
   let result= age>18?"adult":"not adult";

   console.log("result=",result);