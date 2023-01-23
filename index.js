const computerChoiceDisplay= document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    yourChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;


if (randomNumber === 1) {
    computerChoice = 'rock'
}

if (randomNumber === 2) {
    computerChoice = 'scissors'
}

if (randomNumber === 3) {
    computerChoice = 'paper'
}

computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a tie'
    }
    if (computerChoice === 'rock' && userChoice ==='paper') {
        result = 'you Win!'
    }
    if (computerChoice === 'rock' && userChoice ==='scissors') {
        result = 'you LOSE!'
    }
    if (computerChoice === 'paper' && userChoice ==='rock') {
        result = 'you LOSE!'
    }
    if (computerChoice === 'paper' && userChoice ==='scissors') {
        result = 'you WIN!'
    }
    if (computerChoice === 'scissors' && userChoice ==='rock') {
        result = 'you Win!'
    }
    if (computerChoice === 'scissors' && userChoice ==='paper') {
        result = 'you LOSE!'
    }

    resultDisplay.innerHTML = result
}



