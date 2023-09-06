/*----Object that displays the game board*/

const Gameboard = (() => {
    let gameboard = ["", "", "", "", "","","", "", ""]; //array storing the gameboard

    //Way to render the board on display
    // use a loop to loop through each element in 
    // the array and add it to the game board

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        })

        // Add the the created board to the DOM element #board
        document.querySelector(".gameboard").innerHTML = boardHTML;

    }

    

    return {
        render
    }

})();

// Factory Function that creates players

const createPlayer = (name, mark) => {
    return {
        name, mark
    }
}

/*--- Game Controller- controls when the game starts----*/

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;


    const start = () => {
        players = [
            createPlayer(document.querySelector("#playerOne").value, "X"),
            createPlayer(document.querySelector("#playerTwo").value, "O")
        ]

        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }

    return {
        start
    }

})();


/*---Click Begin Button and Game board displays */

const beginGame = document.querySelector("#begin");

beginGame.addEventListener("click", () => {
       //alert("Hello!");
       Game.start();
    

});







