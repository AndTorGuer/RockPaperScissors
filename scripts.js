//variables
let userChoice;
let computerChoice = computerPlay(); 
let result;

let userCount;
let computerCount;

// will return all elements that matches a CSS selector (should be 3 elements)
const possibleChoices = document.querySelectorAll('button');
// will display the computer choice 
const computerChoiceDisplay = document.getElementById('computer-choice'); 
// will display the user choice 
const userChoiceDisplay = document.getElementById('user-choice');
// will display the result of the round
const resultDisplay = document.getElementById('result');

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (event) => 
 {
  userChoice = event.target.id 
  userChoiceDisplay.innerHTML = userChoice
  computerPlay()
  playRound()
 }
))

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
    computerChoiceDisplay.innerHTML = selection
    return selection;
}

//function for each round wins or loses selection
function playRound (userChoice,computerChoice)
{
    let result;
    // User and Computer same choice
    if(userChoice === computerChoice)
    {
        result = 'Draw!';
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
    resultDisplay.innerHTML = result
    return result;
}

//function is made to be able to play a game of 5 rounds
function game(userChoice,computerChoice)
{
    for (let i = 0; i < 5; i++)
    {
      playRound(userChoice,computerChoice);
      whoWins(userChoice,computerChoice);
      userCount.innerHTML = userCount;
      computerCount.innerHTML = computerCount;
    }
}

function whoWins(userChoice,computerChoice)
{
   if(playRound(userChoice,computerChoice) === 'You Win!')
   {
     userCount += 1;
   }
   else (playRound(userChoice,computerChoice) === 'You Lose!')
   {
     computerCount += 1;
   }   
}








