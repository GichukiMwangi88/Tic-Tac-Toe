/*----Object that displays the game board*/

const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""]; //array storing the gameboard

  //Way to render the board on display
  // use a loop to loop through each element in
  // the array and add it to the game board

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      //Validation - ensure player names are entered.
      if (
        document.querySelector("#playerOne").value === "" &&
        document.querySelector("#playerTwo").value === ""
      ) {
        return;
      } else {
        boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
      }
    });

    // Add the the created board to the DOM element #board
    document.querySelector(".gameboard").innerHTML = boardHTML;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", Game.handleClick);
    });
  };

  const update = (index, value) => {
    gameboard[index] = value;
    render();
  };

  const getGameboard = () => gameboard;

  //Check for winner

  const checkForWin = (board) => {
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

  }

  return {
    render,
    update,
    getGameboard
  };
})();

// Factory Function that creates players

const createPlayer = (name, mark) => {
  return {
    name,
    mark,
  };
};

/*--- Game Controller- controls when the game starts----*/

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    players = [
      createPlayer(document.querySelector("#playerOne").value, "X"),
      createPlayer(document.querySelector("#playerTwo").value, "O"),
    ];

    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
  };
  const handleClick = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);
    
    if (Gameboard.getGameboard()[index] !== "")
      return;

    Gameboard.update(index, players[currentPlayerIndex].mark);

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;

   
  };

  const restart = () => {
    for(let i= 0; i < 9; i++) {
        Gameboard.update(i, "");
    }
    Gameboard.render();

  }

  return {
    start,
    handleClick,
    restart
  };
})();

//

/*---Click Begin Button and Game board displays */

const beginGame = document.querySelector("#begin");

beginGame.addEventListener("click", () => {
  Game.start();
});

/*--Restart the game-- */

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    Game.restart()
})