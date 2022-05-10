// To display the user choice 
const userChoiceDisplay = document.getElementById('user-choice')
// To display the computer choice 
const computerChoiceDisplay = document.getElementById('computer-choice')
// To display the result of the round
const resultDisplay = document.getElementById('result') 
// To return all elements that matches a CSS selector (should be 3 elements)
const possibleChoices = document.querySelectorAll('button')

// Variables
let userChoice 
let computerChoice 
let result

game()

// This function is made to be able to play a game of 5 rounds
function game()
{   
      // For each choice it will add an event listener for a click
      possibleChoices.forEach(button => button.addEventListener('click', (event) => 
       { // every time you click, all below will happen
         userChoice = event.target.id
         userChoiceDisplay.innerHTML = userChoice
         computerPlay() // The computer is going to make a play
         playRound() // It determines who wins the round                      
       }
      )) 
}

//function to give the computer random choices
function computerPlay()
{   // It will give you a random number from 0 - 2 (one of the three) 
    // Added 1 so it goes from 1 - 3
    const random = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if(random === 1)
    {
        computerChoice = 'rock'
    }
    if(random === 2)
    {
        computerChoice = 'scissor'
    }
    if(random === 3)
    {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

//function for each round wins or loses selection
function playRound() // You can make this function with a switch
{   
    // User and Computer same choice
    if(userChoice === computerChoice)
    {
        result = 'Its a Draw!'
    }
    // User loses cases
    if(userChoice === 'rock' && computerChoice === 'paper')
    {
        result = 'You Lost!'        
    }
    if(userChoice === 'paper' && computerChoice === 'scissor')
    {
        result = 'You Lost!'      
    }
    if(userChoice === 'scissor' && computerChoice === 'rock')
    {
        result = 'You Lost!'     
    }
    // User wins cases
    if(userChoice === 'rock' && computerChoice === 'scissor')
    {
        result = 'You Win!'
    }
    if(userChoice === 'paper' && computerChoice === 'rock')
    {
        result = 'You Win!'
    }
    if(userChoice === 'scissor' && computerChoice === 'paper')
    {
        result = 'You Win!'
    }
    resultDisplay.innerHTML = result
}
