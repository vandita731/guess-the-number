let randomNumber = parseInt(Math.random()*100 +1)

const userInput = document.querySelector("#guessedNumber")
const submit = document.querySelector("#submitGuess")
const guessed = document.querySelector(".guessed")
const remaining = document.querySelector(".remaining")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startover = document.querySelector(".resultParas")

const p = document.createElement("p")


let prevGuess = []
let numGuess = 1

let playGame =true

if(playGame){
    submit.addEventListener("click",function(e) {
        e.preventDefault()
        let guess=parseInt(userInput.value)
        validateGuess(guess)
    })
        
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess<1){
        alert("Please enter number greater than or equal to 1")
    }
    else if(guess>100){
        alert("Please enter number less than or equal to 100")

    }
    else{
        prevGuess.push(guess)
        checkGuess(guess)
        displayGuess(guess)
        
        // remaining.innerHTML=`${0}`


         console.log(numGuess)
        if(numGuess ===11){
            displayMessage(`Game Over`)
            endGame()
        }
        
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess>randomNumber){
        displayMessage(`Number is TO High`)
    }
    else{
        displayMessage(`Number is To Low`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessed.innerHTML +=`${guess} ; `
    
    remaining.innerHTML=`${10-numGuess}`
    numGuess++
    
    console.log(numGuess)
    checkGuess(guess)

    
    
    

}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=""
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startover.appendChild(p)
    
    playGame=false
    newGame()
    
}
function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",function(e){
        randomNumber = parseInt(Math.random()*100 +1)
        numGuess=1;
        prevGuess=[]
        guessed.innerHTML="";
        lowOrHigh.innerHTML=""
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute("disabled")
        startover.removeChild(p)

        playGame=true

    })
}
