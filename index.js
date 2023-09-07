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

  return {
    render,
    update,
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
    Gameboard.update(index, players[currentPlayerIndex].mark);

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
  };

  return {
    start,
    handleClick,
  };
})();

/*---Click Begin Button and Game board displays */

const beginGame = document.querySelector("#begin");

beginGame.addEventListener("click", () => {
  Game.start();
});
