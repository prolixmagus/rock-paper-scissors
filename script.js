let playerScore = 0;
let computerScore = 0;
const announcement = document.querySelector('#announcement')
const scoreHuman = document.querySelector('#score-human')
const scoreComputer = document.querySelector('#score-computer')
const resultDisplay = document.querySelector('.result-display')
const buttons = document.querySelectorAll('button');
const resetButton = document.querySelector('#reset')

buttons.forEach((button) => {
    button.addEventListener('click', playGame)
})

resetButton.addEventListener('click', () => {
        window.location.reload();
})

// functions

resetButton.addEventListener('click', () => {

})

function displayButton () {
    resetButton.style.display = 'block'
}

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
        scoreHuman.textContent = `${playerScore}`
        scoreComputer.textContent = `${computerScore}`

    } else if (playerSelection === computerSelection) {
        announcement.textContent = 'It\'s a tie! No points!'  
        scoreHuman.textContent = `${playerScore}`
        scoreComputer.textContent = `${computerScore}`

    } else {
        computerScore ++;
        announcement.textContent = `The Computer won the round! ${capitalizeFirstHumanSelection} beats ${capitalizeFirstCompSelection}!`
        scoreHuman.textContent = `${playerScore}`
        scoreComputer.textContent = `${computerScore}`
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
    announcement.style.cssText = 'font: bold normal 1.5em "Tahoma, Geneva, Verdana, sans-serif"; color: #00008B;'
    removeButtonEvents();
    displayButton();
}

function announceComputerWinner() {
    announcement.textContent = 'The Computer won the game! Too bad.'
    announcement.style.cssText = 'font: bold normal 1.5em "Tahoma, Geneva, Verdana, sans-serif"; color: #B85229;'
    removeButtonEvents();
    displayButton();
}

function removeButtonEvents() {
    buttons.forEach((button) => {
        button.removeEventListener('click', playGame)
    })
}

function firstToFive() {

}