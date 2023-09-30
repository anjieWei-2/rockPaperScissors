results = document.getElementById('results')
playerScoreDisplay = document.getElementById('playerScore')
computerScoreDisplay = document.getElementById('computerScore')
function setZero(){
    playerScoreDisplay.textContent = 0
    playerScore = 0
    computerScoreDisplay.textContent = 0
    computerScore = 0
}
setZero()

function getComputerChoice(){
    possibles=['Rock','Paper', 'Scissors']
    computerSelection=Math.floor(Math.random()*3)
    computerSelection=possibles[computerSelection]
    return computerSelection
}

function playRound(playerSelection, computerSelection){
    computerSelection=getComputerChoice().toUpperCase()
    if(playerScore==5||computerScore==5){
        setZero()
    }
    if (playerSelection==computerSelection) {
        results.textContent='Draw! Both ' + playerSelection
    } else if (playerSelection=='ROCK') {
        if(computerSelection=='SCISSORS'){
            results.textContent='You won! Rock beats scissors!'
            playerScore+=1
            playerScoreDisplay.textContent=playerScore
            if(playerScore==5){
                results.append(' You have 5 points first! You won the game!')
                setZero()
            }
        }else{
            results.textContent= 'Sorry. Paper beats rock'
            computerScore+=1
            computerScoreDisplay.textContent=computerScore
            if(computerScore==5){
                results.append(' The computer have 5 points first. Sorry you lost.')
            }
        }
    }else if (playerSelection=='SCISSORS'){
        if(computerSelection=='Rock'){
            results.textContent= 'Sorry, Rock beats scissors.'
            computerScore+=1
            computerScoreDisplay.textContent=computerScore
            if(computerScore==5){
                results.append(' The computer have 5 points first. Sorry you lost.')
            }
        }else{
            results.textContent= 'You won! Scissors beats paper.'
            playerScore+=1
            playerScoreDisplay.textContent=playerScore
            if(playerScore==5){
                results.append(' You have 5 points first! You won the game!')
            }
        }
    }else if (playerSelection=='PAPER'){
        if(computerSelection=='ROCK'){
            results.textContent= ' You won! Paper beats rock.'
            playerScore+=1
            playerScoreDisplay.textContent=playerScore
            if(playerScore==5){
                results.append(' You have 5 points first! You won the game!')
            }
        }else{
            results.textContent= 'Sorry, scissors beat paper.'
            computerScore+=1
            computerScoreDisplay.textContent=computerScore
            if(computerScore==5){
                results.append(' The computer have 5 points first. Sorry you lost.')
            }
        }
    }else{
        results.textContent= 'You sure thats an option?'
    }
}
<<<<<<< HEAD


document.getElementById('rock').addEventListener('click',()=>{
    playRound('ROCK');
})
document.getElementById('scissors').addEventListener('click',()=>{
    playRound('SCISSORS');
})
document.getElementById('paper').addEventListener('click',()=>{
    playRound('PAPER');
})
=======
>>>>>>> 470c02bc7ec8be71f698627adb40988ac3a576b7
