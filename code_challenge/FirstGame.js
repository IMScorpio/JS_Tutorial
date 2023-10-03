//First Game: Rock, Paper or Scissor.

let playGame = confirm("shall we play rock, paper, scissors");
if(playGame){
    let playerChoice = prompt("Choose rock, paper, or scissors");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(
            playerOne == 'rock' ||
            playerOne == 'paper'||
            playerOne== 'scissor'
        ){
        let computerChoice = Math.floor(Math.random() *3 + 1);
        let computer = 
            computerChoice === 1 
                ? 'rock' 
                : computerChoice === 2 
                ? 'paper'
                : 'scissor';
        let result = 
            playerOne === computer ? 
            "tie game" 
            : playerOne === 'rock' && computer === 'paper' 
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === 'paper' && computer === 'scissor' 
            ?  `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === 'scissor' && computer === 'rock' 
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
        
        alert(result);
        let playAgain = confirm("Play Again");
        playAgain ? location.reload() : alert("Ok, Thanks for playing");

        }else{
            alert('You did not enter')
        }
    }
    else{
        alert("sorry may be later")
    }
}
else{
    alert("May be next time");
}