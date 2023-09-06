/*----Object that displays the game board*/

const Gameboard = (() => {
    let gameboard = ["", "", "", "", "","","", "", ""]; //array storing the gameboard

    //Way to render the board on display
    // use a loop to loop through each element in 
    // the array and add it to the game board

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}>${square}</div>`
        })

    }

    // Add the the created board to the DOM element #board
    document.querySelector(".gameboard").innerHTML = boardHTML;

    return {
        render
    }

})();


/*---Click Begin Button and Game board displays */

const beginGame = document.querySelector("#begin");

beginGame.addEventListener("click", () => {
       alert("Hello!");
    

});







