//Tell Computer to randomly choose betwen rock, paper and scissors 
//Generate random number and attach the number to a maching string
//if random number is 1 it is rock, if it is 2 then its paper otherwise scissors
//Generate random number 

function getComputerChoice(){
const ranNum =  Math.floor(Math.random() * 3) + 1;
if(ranNum === 1){
    return console.log("Rock")
}
if(ranNum === 2){
   return console.log("Paper")
}
else{
   return console.log("Scissors")
}
}

function getHumanChoice(){

}




console.log(getComputerChoice())