playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final Score: You: ${humanScore}, Computer: ${computerScore}`);

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log(`You both chose ${humanChoice}. That's a draw!`);
        } else {
            if (humanChoice === 'rock') {
                if (computerChoice === 'paper') {
                    loser(humanChoice, computerChoice);
                }
                else if (computerChoice === 'scissors') {
                    winner(humanChoice, computerChoice);
                }
                else {
                    console.log('Something went wrong.');
                }
            } else if (humanChoice === 'paper') {
                if (computerChoice === 'rock') {
                    winner(humanChoice, computerChoice);
                }
                else if (computerChoice === 'scissors') {
                    loser(humanChoice, computerChoice);
                }
                else {
                    console.log('Something went wrong.');
                }
            } else if (humanChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    loser(humanChoice, computerChoice);
                }
                else if (computerChoice === 'paper') {
                    winner(humanChoice, computerChoice);
                }
                else {
                    console.log('Something went wrong.');
                }
            } else {
                console.log('Something went wrong.');
            }
        }
    };

    function winner(humanChoice, computerChoice) {
        console.log(`${humanChoice} beats ${computerChoice}. You win!`);
        humanScore += 1;
    };

    function loser(humanChoice, computerChoice) {
        console.log(`${computerChoice} beats ${humanChoice}. You lose!`);
        computerScore += 1;
    };

    function getComputerChoice() {
        let r = Math.floor(Math.random() * 3);
        const choices = ['rock', 'paper', 'scissors'];
        return choices[r];
    };

    function getHumanChoice() {
        let ans = window.prompt();
        return ans;
    };
};