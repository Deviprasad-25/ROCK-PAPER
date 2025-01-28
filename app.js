let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options=["rock","paper","scissor"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("game was draw.")
    msg.innerText = "Game is draw! hope you would win next time";
    msg.style.backgroundColor="blue";
};
const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor="green";
    }
        else {
        console.log("you lose");
        msg.innerText = "You Lose.";
        msg.style.backgroundColor="red";
        
        }
    };

const playGame = (userChoice) => {
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice === "paper" ? false : true;

        } else if(userChoice==="paper"){
            userWin=compChoice==="scissor" ?false : true;
        } else {
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin);
    }
}; 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
  });
});
