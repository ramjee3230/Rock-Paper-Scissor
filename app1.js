let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChois = choice.getAttribute("id");
        PlayGame(userChois);
    });
});

const PlayGame = (userChois) => {
    // console.log("click the choice", userChois);
    const CompChoice=GenComChoice();
    // console.log("Chpmputer Choice",CompChoice);

    if (userChois==CompChoice) {
        GameDraw();
    }else{
        let userWin =true;
        if (userChois=="rock") {
            userWin=CompChoice==="paper"?false:true;
        }else if (userChois=="paper") {
            userWin=CompChoice==="scissor"?false:true;

        } else {
            userWin=CompChoice==="rock"?false:true;
        }
        showUswrWin(userWin,userChois,CompChoice);
    }
}

const GenComChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const rendIdx = Math.floor(Math.random() * 3);
    return option[rendIdx];
}

const GameDraw=()=>{
    console.log("game was Draw.");
    msg.innerText="Game Was Draw. Play Again !";
    msg.style.backgroundColor="#081b31";

    
}
const showUswrWin=(userWin,userChois,CompChoice)=>{
 if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    // console.log("you Win");
    msg.innerText=`You Win ! Your ${userChois} beats ${CompChoice}`;
    msg.style.backgroundColor="green";
    
    
 }else{
    compScore++;
    comScorePara.innerText=compScore;
    // console.log("you lose");
    msg.innerText=`You Lose ! ${CompChoice} beats Your ${userChois}  `;
    msg.style.backgroundColor="red";
    

 }
}



