let getComputerChoice = () => {
    let rand = Math.random();
    if (rand >= 0.66) {
        return "rock";
    } else if (rand > 0.33 && rand < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let getHumanChoice = () => {
    let choice = prompt("rock, paper, or scissors?");
    return choice;
}

let humanScore = 0, computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
        console.log(`It's a tie! You both chose ${human}`);
    } else if (
        human === "rock" && computer === "scissors" || 
        human === "paper" && computer === "rock" ||
        human === "scissors" && computer == "paper") 
    {
        console.log(`You win! you chose ${human} while the computer chose ${computer}!`);
        humanScore++;
    } else {
        console.log(`The computer wins. You chose ${human} while the computer chose ${computer}.`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

for (let i = 0; i < 5; i++) {
    playRound(humanSelection, computerSelection);
}


//console.log(getComputerChoice());