var numPlayers = 2;
var dicePerPlayer = 2;

var gameboard = document.getElementById("Gameboard");
gameboard.innerHTML = "";

fillGameboard(numPlayers, dicePerPlayer);

function fillGameboard(playerCount, diceCount) {
    for (let player = 0; player < playerCount; player++) {

        let playerBoardDiv = createPlayerBoard(player + 1, diceCount);

        gameboard.insertAdjacentElement("beforeend", playerBoardDiv)
    }

    function createPlayerBoard(playerNum, diceNum) {

        //Create the Player Boarc
        let playerBoardDiv = document.createElement("div");
        playerBoardDiv.classList.add("player-board");

        //Create the Player Title section of board
        let playerTitleContainerDiv = createPlayerTitleContainer();

        //Create the Dice Area
        let diceAreaDiv = createDiceAreadDiv();

        //Add them to the board
        playerBoardDiv.insertAdjacentElement("afterBegin", playerTitleContainerDiv);
        playerBoardDiv.insertAdjacentElement("beforeEnd", diceAreaDiv);
    
        return playerBoardDiv;

        function createPlayerTitleContainer() {
            let playerTitleContainerDiv = document.createElement("div");
            playerTitleContainerDiv.classList.add("player-title-container");

            let playerTitleHeader = createPlayerTitle();

            playerTitleContainerDiv.insertAdjacentElement("beforeEnd", playerTitleHeader);
            return playerTitleContainerDiv;

            function createPlayerTitle() {
                let playerTitleHeader = document.createElement("h3");
                playerTitleHeader.classList.add("player-title");
                playerTitleHeader.textContent = "Player" + playerNum;
                return playerTitleHeader;
            }
        }

        function createDiceAreadDiv() {
            let diceAreaDiv = document.createElement("div");
            diceAreaDiv.classList.add("dice-area");

            for (let dice = 0; dice < diceNum; dice++) {
                let diceContainerDiv = createDiceContainer();

                diceAreaDiv.insertAdjacentElement("beforEend", diceContainerDiv);
            }
            return diceAreaDiv;

            function createDiceContainer() {
                let diceContainerDiv = document.createElement("div");
                diceContainerDiv.classList.add("dice-container");
    
                let diceImage = createDiceImage();
    
                diceContainerDiv.insertAdjacentElement("beforeEnd", diceImage);
                return diceContainerDiv;
    
                function createDiceImage() {
                    let diceImage = document.createElement("img");
                    diceImage.classList.add("dice-img");
                    diceImage.src = "images/dice5.png";
                    return diceImage;
                }
            }
        }
    }
}
