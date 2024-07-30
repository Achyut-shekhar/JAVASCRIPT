let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");

const drawgame=()=>{
    console.log("game is draw!!!")
     msg.innerText="Game draw.play again!!!"
     msg.style.backgroundColor="black";
}

const gencompChoice=()=>{
    const options= ["rock","paper","scissor"];
    const RandIdx=Math.floor(Math.random()*3);
    return options[RandIdx];
}

const showWinner=(userwin)=>{
    if(userwin){
        userScore++;
        user.innerText=userScore;
        console.log("you win!!");
        msg.innerText = `You win!!`;

        msg.style.backgroundColor="green";
       
    }
    else
    {compScore++;
        comp.innerText=compScore;
        console.log("you lost");
 msg.innerText="You lost !!"
  msg.style.backgroundColor="red";

}
};

const playgame=(userchoice)=>{
    console.log("user choice= ",userchoice)
    //generate computer choice -> modular programming
    let compChoice= gencompChoice();
    console.log("comp choice= ",compChoice);

    if(userchoice===compChoice){
        //draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissor,paper
           userwin= compChoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            //rock,scissor
            userwin=compChoice==="scissor" ? false:true;
        } 
        else if(userchoice==="scissor")
        {
           userwin=compChoice==="rock"?false:true;
       }
       showWinner(userwin);

    }
   
   
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    })
})