const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const playAgainButton = document.getElementById('play-again');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(userChoice, computerChoice);
        resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
        playAgainButton.style.display = 'block';
    });
});

playAgainButton.addEventListener('click', () => {
    resultText.textContent = '';
    playAgainButton.style.display = 'none';
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "scissors" && computerChoice === "paper") ||
               (userChoice === "paper" && computerChoice === "rock")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
