const initGame = () =>{
    const startGame = confirm("Shall we Play rock, paper and scissors");
    startGame ? playGame() : alert('Maybe later!');
};

const playGame = () => {
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice ===''){
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            decideNotToplay();
            break;
        }
        playerChoice = evaluateChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice(); 
        const result = evaluateResult(playerChoice, computerChoice);
        displayResult(result);
        if(askToplayAgain()){
            continue;
        }else{
            thanksForPlaying();
            break;
        }
        
    }
};

const getPlayerChoice = () =>{
    return prompt('Please select rock, paper, or scissors');
};

const formatPlayerChoice = (playerChoice) =>{
    if(playerChoice || playerChoice === ''){
        return playerChoice.trim().toLowerCase();
    }else{
        return false;
    }
};

const invalidChoice =() =>{
    alert('You did not enter rock, paper or scissors')
};

const decideNotToplay = () =>{
    return alert(' May be Later!')
};

const evaluateChoice = (playerChoice) =>{
    if(
        playerChoice === 'rock' ||
        playerChoice === 'paper' ||
        playerChoice ==='scissor'
    ){
        return playerChoice;
    }
    else{
        return false;
    }
};


const getComputerChoice = () =>{
    const computer = Math.floor(Math.random() * 3);
    const rpsArray = ['rock', 'paper', 'scissors'];
    return rpsArray[computer];
};

const evaluateResult = (player, computer) =>{
    const result = 
        player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;


    return result;
};

const displayResult = (result) =>{
    alert(result);
};

const askToplayAgain = () =>{
    return confirm('Would you like to play again?');
};

const thanksForPlaying = () =>{
    alert('Thanks for playing');
};
initGame();

