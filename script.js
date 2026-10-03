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




