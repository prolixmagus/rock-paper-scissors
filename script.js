let playerScore = 0;
let computerScore = 0;
const announcement = document.querySelector('#announcement')
const scoreHuman = document.querySelector('#scoreHuman')
const scoreComputer = document.querySelector('#scoreComputer')
const resultDisplay = document.querySelector('.resultDisplay')
const buttons = document.querySelectorAll('button');
const resetButton = document.querySelector('#reset')

buttons.forEach((button) => {
    button.addEventListener('click', playGame)
})

resetButton.addEventListener('click', () => {
        window.location.reload();
})

// functions
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock"
    } else if (randomNumber == 1) {
        return "paper"
    } else if (randomNumber == 2) {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let capitalizeFirstHumanSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    let capitalizeFirstCompSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
//tie
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        
        playerScore++;
        announcement.textContent = `You won the round! ${capitalizeFirstHumanSelection} beats ${capitalizeFirstCompSelection}!`
        scoreHuman.textContent = `Human: ${playerScore}`
        scoreComputer.textContent = `Computer: ${computerScore}`

    } else if (playerSelection === computerSelection) {
        announcement.textContent = 'It\'s a tie! No points!'  
        scoreHuman.textContent = `Human: ${playerScore}`
        scoreComputer.textContent = `Computer: ${computerScore}`

    } else {
        computerScore ++;
        announcement.textContent = `The Computer won the round! ${capitalizeFirstHumanSelection} beats ${capitalizeFirstCompSelection}!`
        scoreHuman.textContent = `Human: ${playerScore}`
        scoreComputer.textContent = `Computer: ${computerScore}`
    }
}

function playGame(e) {
    let playerSelection = (e.target.id)
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    checkEndGame();
}

function checkEndGame() {
    if (playerScore >= 5 && computerScore < 5) {
        announceHumanWinner()
    } else if (computerScore >=5 && playerScore < 5) {
        announceComputerWinner()
    } 
}

function announceHumanWinner() {
    announcement.textContent = 'You won the game! Huzzah!'
    announcement.style.cssText = 'font: bold normal 2em "Tahoma, Geneva, Verdana, sans-serif"; color: #91C07D;'
    removeButtonEvents();
}

function announceComputerWinner() {
    announcement.textContent = 'The Computer won the game! Too bad.'
    announcement.style.cssText = 'font: bold normal 2em "Tahoma, Geneva, Verdana, sans-serif"; color: #B85229;'
    removeButtonEvents();
}

function removeButtonEvents() {
    buttons.forEach((button) => {
        button.removeEventListener('click', playGame)
    })
}