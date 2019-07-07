let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    let num = Math.floor(Math.random()*3);
    return choices[num];
}

function convertWord(letter){
    switch(letter){
        case "r": return "Rock";
        case "p": return "Paper";
        case "s": return "Scissors";
    }
}

function win(userChoice, computerChoice){
    userScore++;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertWord(userChoice)} beats ${convertWord(computerChoice)}. You win!`
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice){
    computerScore++;
    const userChoice_div = document.getElementById(userChoice);
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertWord(userChoice)} loses to ${convertWord(computerChoice)}. You lose...`
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertWord(userChoice)} equals ${convertWord(computerChoice)}. It's a Draw.`
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice){
    let computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();