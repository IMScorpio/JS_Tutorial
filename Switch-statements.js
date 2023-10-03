//Conditional switch-statements;

//Example : rock paper and scissors.

let computer = 'scissors';
let player = 'scissors';

switch(player){
    case computer:
        console.log('tie game');
        break;
    case "rock":
        if(computer === 'paper'){
            console.log("computer win");}
        else{
            console.log('player wins')
        }
        break;
    case "paper":
        if(computer === 'scissors'){
            console.log("computer win");}
        else{
            console.log('player wins')
        }
        break;
    case "scissors":
        if(computer === 'rock'){
            console.log("computer win");}
        else{
            console.log('player wins')
        }
        break;

    default:
        console.log(`invalid input`);
    
}