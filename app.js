//to do

// update the board upon selection 
// call the winnerValidator function : still need to check for draws
// update the UI based on the results

// first and foremost created my 2 players. player1 which is x, player 2 which is o
let player1 = "x"
let player2 ="o"
let currentPlayer = "x"

const gameBoard = [
    '', '', '', //   [0, 1, 2
    '', '', '', //  3, 4, 5
    '', '', ''  //  6, 7, 8]
]


  // created a variable to store all possible winning formations
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
let player = document.getElementById("playerName")
let refreshButton = document.getElementById("refresh")
let message = document.getElementById("messageBox")


function cellClicked(click){
    let currentCell = click.target.id
    console.log("hello world", currentCell)
    
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

// only let a click be possible on the cell if it is null 
function cellClicker() {
    for(var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", cellClicked)
    }
}


// Remember function needs to be called
cellClicker()

function winnerValidator() {
    // assign roundWon variable to = false
    let roundWon = false;
    // loop through each index in winning conditions starting from 0, as long as it is less than or equal to 7
    for (let i = 0; i <= 7; i++) {
        // assigns winningConditions current index to a winCondition constant
        const winCondition = winningConditions[i]; // [0, 4, 8]
        let firstChoiceIndex = winCondition[0] // 0
        let secondChoiceIndex = winCondition[1] // 4
        let thirdChoiceIndex = winCondition[2] // 8

        let a = gameBoard[firstChoiceIndex]; // ''
        let b = gameBoard[secondChoiceIndex]; // o
        let c = gameBoard[thirdChoiceIndex]; // x

        
         if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            console.log(winCondition)
            break 
        }
    }
    console.log(roundWon)
    if(roundWon  === true) {  //display a message saying the player has won
        alert("We have a winner")

    }
}

//winnerValidator()











// this function will be our entry function to enter player names and display them
// function playerNames(){
//     let player1 = document.getElementById("Player1").value
//     let player2 = document.getElementById("Player2").value

//     if (player1 === " " || player2 === " ") {
//         alert("waiting on a player")
//         return
//     }
//     document.getElementById("player1").innerText = player1 + "will be 'x' and "
//     document.getElementById("player2").innerText = player2 + "will be 'o'"
//     document.getElementById("firstMark").innerText = playerX + "you are first!"
    
//     enableClick()
// }







// built a function to determine who's turn it is, using math.random method
// function playerUp () {
//     let randomNum = Math.round(Math.random())
//     console.log(randomNum) 
//     console.log("hello")
// }

// //called our functiom
// playerUp ()











// board.forEach










// function currentCellPlayed() {
//     let gameOver = false;


// }
// function nextPlayerUp() {








// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// document.querySelector('.game--restart').addEventListener('click', handleRestartGame);


