console.log("hello world");

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
console.log(getComputerChoice());
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
    

console.log(getHumanChoice());
