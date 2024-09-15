var numPlayers = 4;
var dicePerPlayer = 6;

var gameboard = document.getElementById("Gameboard");
gameboard.innerHTML = "";

for (var i = 0; i < numPlayers; i++)
{
    gameboard.innerHTML += `            <div class="player-board">     
                <div class="player-title-container">
                    <h3 class="player-title">Player 1</h3>
                </div>
                <div class="dice-area">
                    <div class="dice-container">
                        <img class="dice-img" src="images/dice5.png" alt="">
                    </div>
                    <div class="dice-container">
                        <img class="dice-img" src="images/dice5.png" alt="">
                    </div>
                </div>
            </div>`
}