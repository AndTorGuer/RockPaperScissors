let userChoice = "rock";
let computerChoice = computerPlay(); 
let result;
const possibleChoices = 3;

//function to give the computer random choices
function computerPlay()
{
    const random = Math.floor(Math.random() * possibleChoices.length) + 1;
    let selection;
    if(random === 1)
    {
        selection = 'rock';
    }
    elseif(random === 2)
    {
        selection = 'paper';
    }
    elseif(random === 3)
    {
        selection = 'scissor';
    }
    return selection;
}
//function for each round wins or loses selection
function playRound (userChoice,computerChoice)
{
    let result;
    // User and Computer same choice
    if(userChoice === computerChoice)
    {
        result = 'Tie';
    }
    // User loses cases
    if(userChoice === 'rock' && computerChoice === 'paper')
    {
        result = 'You Lose!';
    }
    if(userChoice === 'paper' && computerChoice === 'scissor')
    {
        result = 'You Lose!';
    }
    if(userChoice === 'scissor' && computerChoice === 'rock')
    {
        result = 'You Lose!';
    }
    // User wins cases
    if(userChoice === 'rock' && computerChoice === 'scissor')
    {
        result = 'You Win!';
    }
    if(userChoice === 'paper' && computerChoice === 'rock')
    {
        result = 'You Win!';
    }
    if(userChoice === 'scissor' && computerChoice === 'paper')
    {
        result = 'You Win!';
    }
    return result;
}

//function is made to be able to play a game of 5 rounds
function game(userChoice,computerChoice)
{
    for (let i = 0; i < 5; i++)
    {
      playRound(userChoice,computerChoice);
    }
}

console.log(playRound(userChoice,computerChoice));