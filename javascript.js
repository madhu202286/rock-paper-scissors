    //take user input
    let playerSelection= prompt("Choose your weapon:");
    playerSelection=playerSelection.toLowerCase();
    console.log ("You chose " + playerSelection);
    
    
    //function to generate random choice from computer
    function getComputerChoice(){
        const choices= Math.floor(Math.random()*3);
        switch(choices){
            case 0:return "rock";
            case 1: return "paper";
            case 2:return "scissors";
        } 
    }
    //take computer input
    let computerSelection= getComputerChoice();
    console.log ("Computer chose " + computerSelection);


//declare function to compare 2 inputs
function playRound(playerSelection,computerSelection) {

    if (playerSelection === computerSelection) {
      return ("It is a tie");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
      return ("You win!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      return ("You lose!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return ("You win!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return ("You lose!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return ("You win!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return ("You lose!");
    }
     
  }
console.log (playRound(playerSelection,computerSelection));

//declare function score
let computerScore=0;
let playerScore=0;
count=0;
function score()
    {
    
        if(playRound(playerSelection,computerSelection)==
        "You lose!"){
            computerScore+=1;
            count+=1;
        }
        else if(playRound(playerSelection,computerSelection)==
        "You win!"){
            playerScore+=1;
            count+=1;
        }
        else if(playRound(playerSelection,computerSelection)=="It is a tie"){
            count+=1;
        }

        console.log ("Computer: " +computerScore);
        console.log ("You: " +playerScore);

    }
score();


 //after 5 rounds final result
function game(){
    let i=0; //round count
    for( i=1;i<5;i++){

    playerSelection= prompt("Choose your weapon:");
    playerSelection=playerSelection.toLowerCase();
    console.log ("You chose " + playerSelection);

    computerSelection= getComputerChoice();
    console.log ("Computer chose " + computerSelection);

    playRound(playerSelection,computerSelection);
    console.log(playRound(playerSelection,computerSelection));
    score();
     
}
if (computerScore>playerScore)[
    console.log("Computer wins!")
]
else if(playerScore>computerScore){
    console.log("You win!")
}
else{
    console.log("It's a tie.")
}   
}
game();

