let playGame = confirm('shall we play a game');
if(playGame){
    while(playGame){
        const playerChoice = prompt("Choose rock, paper, or scissor");
        if(playerChoice || playerChoice === ''){
            const playerOne= playerChoice.trim().toLowerCase();
            if(
                playerOne == 'rock' ||
                playerOne == 'paper'||
                playerOne == 'scissor'
            );
            const computerChoice = Math.floor(Math.random() * 3 + 1);
            const rpsArray = ['rock', 'paper', 'scissor'];
            const computer = rpsArray[computerChoice];
            const result = 
                playerOne === computer
                ? 'tie game!' 
                : playerOne === 'rock' && computer === 'paper'
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === 'paper' && computer ==='scissor'
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne ==='scissor' && computer === 'rock'
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
            alert(result);
            playGame = confirm("Play again?");
            if(!playGame){
                alert("Thanks for playing!");
                continue;
            } 
            else{
                alert('You didnt choose rock, paper, or scissors');
                continue;
            }   
        }else{
            alert('sorry maybe later!');
        }
    }
}else{
    alert("May be next time");
}