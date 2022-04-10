// first and foremost created my 2 players. player1 which is x, player 2 which is o
// set the current player to x
let player1 = "x"
let player2 ="o"
let currentPlayer = "x"

// broke down my array into 3 different lines to mimick a tic-tac-toe board
const gameBoard = [
    '', '', '', //   [0, 1, 2
    '', '', '', //  3, 4, 5
    '', '', ''  //  6, 7, 8]
]


  // created a variable to store all possible winning formations on a tic tac toe board 
let  winningConditions = [
     // horizontal winning formations
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

     // vertical winning formations (columns)
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
        
    // the two diagnal winning formations
    [0, 4, 8],
    [2, 4, 6] 
    ]

// Here I grabbed my elements using the getElementById method, with their id names or class names, and stored them in a variable.
let cells = document.getElementsByClassName("cell")
let board = document.getElementById("board")
let inputField = document.getElementById("input")
let refreshButton = document.getElementById("refresh")
let message = document.getElementById("messageBox")
let playerX = document.getElementById("player1")
let playerO = document.getElementById("player2")
let playersButton = document.getElementById("playerNameInput")
let player1Name = document.getElementById("playerName")
let player2Name = document.getElementById("playerName2")

function playerEntry (){
    playersButton.addEventListener("click", function(){
        playerX.innerText = player1Name.value + " is X"
    })
    playersButton.addEventListener("click", function(){
        playerO.innerText = player2Name.value + " is O"
    })
}
playerEntry()


function cellClicked(click){
    let currentCell = click.target.id
    console.log("selected index " , currentCell)
    
    if(click.target.innerText) {
        return
    }
    // assign the selected cell to current player 
    board[currentCell] = currentPlayer
    click.target.innerText = currentPlayer
    gameBoard[currentCell] = currentPlayer
    winnerValidator()
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
    console.log(gameBoard)
}


function cellClicker() {
    for(var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", cellClicked)
    }
}


// Remember function needs to be called
cellClicker()

function winnerValidator() {
    // assign roundWon variable to = false
    let roundWon = false
    // loop through each index in winning conditions starting from 0, as long as it is less than or equal to 7
    for (let i = 0; i <= 7; i++) {
        // assigns winningConditions current index to a winCondition constant
        const winCondition = winningConditions[i] 
        let firstChoiceIndex = winCondition[0] 
        let secondChoiceIndex = winCondition[1] 
        let thirdChoiceIndex = winCondition[2] 
        //assigned the index of our game board a number that is the index of an array in winning conditions 
        let a = gameBoard[firstChoiceIndex]
        let b = gameBoard[secondChoiceIndex] 
        let c = gameBoard[thirdChoiceIndex]

        // if a, b, c, are empty continue
         if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            console.log(winCondition)
            break 
        }
    }
    // display winner message, else  if display the draw message
     if (roundWon  === true) {  
         document.getElementById("winnerMessage").innerText = currentPlayer + " is the winner!"
    
     } else if(gameBoard.includes("") === false){
        document.getElementById("winnerMessage").innerText = "The match has resulted in a draw!"
        console.log("We have a draw!")
    } 
}
























