function getComputerChoice(){
    possibles=['Rock','Paper', 'Scissors']
    result=Math.floor(Math.random()*3)
    result=possibles[result]
    return result
}
function playRound(playerSelection, computerSelection){
    playerSelection=prompt('Rock, paper, or scissors?').toUpperCase()
    computerSelection=getComputerChoice().toUpperCase()
    if (playerSelection==computerSelection) {
        return'Draw! Both ' + playerSelection
    } else if (playerSelection=='ROCK') {
        if(computerSelection=='SCISSORS'){
            return 'You won! Rock beats scissors!'
        }else{
            return 'Sorry. Paper beats rock'
        }
    }else if (playerSelection=='SCISSORS'){
        if(computerSelection=='Rock'){
            return 'Sorry, Rock beats scissors'
        }else{
            return 'You won! Scissors beats paper'
        }
    }else if (playerSelection=='PAPER'){
        if(computerSelection=='ROCK'){
            return 'You won! Paper beats rock'
        }else{
            return 'Sorry, scissors beat paper'
        }
    }else{
        return 'You sure thats an option?'
    }
}
