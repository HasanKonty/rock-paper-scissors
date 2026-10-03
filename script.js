/* make computer choice "done"
make human choice "done"
compare human and computer choice
decide who won
declare who won 
repeat 5 times 
display score every time

*/












// generate random computer choice
function getComputerChoice() {
    let  compNumber = Math.floor(Math.random() * 3 ) + 1;

    if (compNumber === 1) {
        return "rock";
    } else if (compNumber ===2) {
        return "paper";
    } else {
        return "scissors";
        
    }
}

//make prompt to enter human choice 


function getHumanChoice() {
    let HumanNumber = parseInt(prompt("pick 1 for rock, 2 for paper, 3 for scissors"));

    if (HumanNumber === 1) {
        return "rock";
    }else if (HumanNumber === 2) {
            return "paper";
    }else {
            return "scissors";

    }
 }
    



let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice,computerChoice) {
    
    if (humanChoice.toLowerCase()===computerChoice) {
        console.log("it's a tie");
    }else if(humanChoice.toLowerCase()==="rock" && computerChoice==="scissors"){
        humanScore++;
                 console.log("you win!")

    }else if (humanChoice.toLowerCase()==="rock" && computerChoice==="paper"){
        
        computerScore++
                console.log("you lose!")

    
    }else if (humanChoice.toLowerCase()==="paper" && computerChoice==="rock"){
        
        humanScore++;
                console.log("you win!")


   }else if (humanChoice.toLowerCase()==="paper" && computerChoice==="scissors"){
         computerScore++;
                  console.log("you lose!")


   }else if (humanChoice.toLowerCase()==="scissors" && computerChoice==="paper"){
        humanScore++;
                console.log("you win!")


   }else if (humanChoice.toLowerCase()==="scissors" && computerChoice==="rock"){
        computerScore++;
                console.log("you lose!")
   
   
   }else {console.log("what was that??");}
}

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

