// DOM Elements

const cells = document.querySelectorAll(".square");
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector("#reset");

const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

];

let options = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X"; //keeps track of the current player
let running = false;  //keeps track of the game running

//Begin game
initializeGame();

function initializeGame() {
  cells.forEach(cell => cell.addEventListener("click", cellClicked) )
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;

};

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  //check if cell is empty or game isn't running
  if(options[cellIndex] != "" || !running) {
    return
  }

  updateCell(this, cellIndex);
  checkWinner()

}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;

}

function changePlayer() {
 if(currentPlayer === "X") {
  currentPlayer = "O"
 } else {
  currentPlayer = "X";
 }
 statusText.textContent = `${currentPlayer}'s turn`;


}

function checkWinner() {
  let roundWon = false;

  for(let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    // check if the spaces are empty
    if(cellA === "" || cellB === "" || cellC === "") {
        continue;
     }

     if(cellA === cellB && cellB === cellC) {
        roundWon = true;
        break;
     }

  }

  if(roundWon) {
    statusText.textContent = `${currentPlayer} wins`;
    running = false;
  }
  else if(!options.includes("")) {
    statusText.textContent = `Draw!`;
    running = false;
  }
  else {
    changePlayer();
  }
  
};

function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => cell.textContent = "");
  running = true;
  
};