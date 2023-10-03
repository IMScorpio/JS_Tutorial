//Conditionals: Ternary Operators;

let player = "paper";
let computer = 'rock';

let result = 
    player === computer ? "tie match" 
        : player === "rock" && computer === 'paper' 
        ? "computer wins" 
        : player === " paper" && computer === 'scissors' 
        ? "computer wins"
        : player === "scissors" && computer === 'rock' 
        ? "computer wins"
        : "player wins!"
console.log(result);
