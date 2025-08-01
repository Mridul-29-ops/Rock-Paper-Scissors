function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 1/3) {
        return "rock";
    } else if (randomNum < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = window.prompt("Rock, Paper, or Scissors?");
    if (choice) {
        return choice.toLowerCase();
    }
    return null;
}

getComputerChoice();
getHumanChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        if (!humanSelection) {
            console.log("No valid input. Game stopped.");
            return;
        }

        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        console.log(`Score: You ${humanScore} - Computer ${computerScore}\n`);
    }

    if (humanScore > computerScore) {
        console.log(`Game over! You won ${humanScore} to ${computerScore}. Congratulations!`);
    } else if (computerScore > humanScore) {
        console.log(`Game over! You lost ${humanScore} to ${computerScore}. Better luck next time!`);
    } else {
        console.log(`Game over! It's a tie at ${humanScore} all.`);
    }
}
playGame()