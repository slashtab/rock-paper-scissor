let compScore = 0;
let playerScore = 0;
let callTime = 0;

const rock = document.querySelector('.rock-img');
rock.addEventListener('click', () => playRound("rock", getComputerChoice()));

const paper = document.querySelector(".paper-img");
paper.addEventListener('click', () => playRound("paper", getComputerChoice()));

const scissor = document.querySelector('.scissor-img');
scissor.addEventListener('click', () => playRound("scissor", getComputerChoice()));



//function to return random choice for computer
function getComputerChoice() {
    const possOutcome = ["Rock", "Paper", "Scissor"];
    return possOutcome[Math.floor(3*(Math.random()))];
}

//function to update the score
function update(playerScore, compScore) {
    const score1 = document.querySelector('.score');
    score1.textContent = playerScore;

    const score2 = document.querySelector('.Cscore');
    score2.textContent = compScore;
}

function callmessage() {
    if(compScore+playerScore === 5){
        const finalMsg = document.querySelector('.message');
        if(compScore > playerScore) finalMsg.textContent = "Dark side wins!";
        else finalMsg.textContent = "Well Done! Anakin";
        // rock.removeEventListener('click', playRound(), false);
        // paper.removeEventListener('click', playRound(), false);
        // scissor.removeEventListener('click', playRound(), false);
    }
    return;
}
//function to decide the winner
function playRound(playerChoice, compChoice){
    if(compScore+playerScore === 5) return;
    let playerC = playerChoice.toLowerCase();
    let compC = compChoice.toLowerCase();
    if(playerC === "rock" && compC === "scissor") playerScore++;
    else if(playerC === "paper" && compC === "stone") playerScore++;
    else if(playerC === "scissor" && compC === "paper") playerScore++;
    else if(playerC === compC) playerScore+=0;
    else compScore++;
    update(playerScore, compScore);
    callmessage();
}


