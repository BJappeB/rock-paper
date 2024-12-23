//Tell Computer to randomly choose betwen rock, paper and scissors 
//Generate random number and attach the number to a maching string
//if random number is 1 it is rock, if it is 2 then its paper otherwise scissors
//Generate random number 
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
const ranNum =  Math.floor(Math.random() * 3) + 1;
if(ranNum === 1){
    return "rock"
}
if(ranNum === 2){
   return "paper"
}
else{
   return "scissors"
}
}
//Get the users choice and store the choice the user made
//prompt the choices
//save the choice to a variable

function getHumanChoice(){
let choice = prompt("Pick paper, rock or scissors")
return choice.toLowerCase();

}
//Get the humanChoice and ComputerChoice and then determine which one wins the round
//Get the humanChoice 

function playRound(humanChoice, computerChoice){
humanChoice.toLowerCase()
if(humanChoice == "rock" && computerChoice == "paper"){
console.log("You lose!")
computerScore++
}
if(humanChoice == "rock" && computerChoice == "scissors"){
console.log("You win!")
humanScore++
}
if(humanChoice == "paper" && computerChoice == "rock"){
console.log("You win!")
humanScore++
}
if(humanChoice == "paper" && computerChoice == "scissors"){
console.log("You lose!")
computerScore++
}
if(humanChoice == "scissors" && computerChoice == "rock"){
console.log("You lose!")
computerScore++
}
if(humanChoice == "scissors" && computerChoice == "paper"){
console.log("You win!")
humanScore++
}
if(humanChoice == computerChoice){
   console.log("You tied")
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanSelection);
console.log(computerSelection);
console.log(humanScore)
console.log(computerScore)