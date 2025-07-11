/*-------------------------------- Constants --------------------------------*/

const choices= ['rock', 'paper', 'scissors']
/*-------------------------------- Variables --------------------------------*/

let playerChoice
let computerChoice
let msg

/*------------------------ Cached Element References ------------------------*/

const resultDisplyE1 =
document.querySelector('#result-display');

/*-------------------------------- Functions --------------------------------*/

const getComputerChoice =() => {
const randomIndex = Math.floor(Math.random() * choices.length)

computerChoice = choices[randomIndex]

};

const compare = () => {
if (playerChoice === computerChoice){
    msg= 'you tied!'
}

else if (playerChoice === choices[0] && 
    computerChoice === choices[2]) {
        msg = 'congrats you win'
    }

else if (playerChoice === choices[1] &&
    computerChoice === choices[0]) {
        msg= 'congrats you win'
    }
    
else if (playerChoice === choices[2] &&
    computerChoice === choices[1]) {
        msg= 'congrats you win'
    }

    else{
        msg= 'You lose! Try again'
    }

}

const render = () => {

resultDisplyE1.textContent = `you chose
${playerChoice} and the computer chose
${computerChoice}. ${msg}`

}

const play = (event) => {
    getPlayChoice(event);
    getComputerChoice();
    compare();
    render();
}


/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('#rock').addEventListener('click', play);

document.querySelector('#paper').addEventListener('click', play);

document.querySelector('#scissors').addEventListener('click', play);

document.querySelectorAll('button').forEach(function(button) {

    button.addEventListener('click', play)
});
