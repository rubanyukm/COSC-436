/* Create a web page to play a simple game. The game is played in a large square area. There
are two players. One player is a small green square. The other player is a small red square. Both
players have the same size. The green player is randomly jumping from place to place within the
playing area. The green player can jump from any point to any point. The movement of the green
player is controlled by an animation loop. The red player is trying to catch the green player. The
red player can only jump in left, right, up, or down directions by a fixed distance. There are five
buttons located horizontally below the playing area. The user clicks on the start button to start
the game. The user clicks on left, right, up, or down button to move the red player in left, right,
up, or down direction. When a direction button is clicked the red player jumps in that direction
by the fixed distance. The game continues even if the red player catches the green player. You
need to choose the following: size of players, how often the green player changes its position,
jumping distance of the red player. You need to carefully choose these values so that the game
does not become too difficult or too easy. Use appropriate css style for the game. */

var greenPlayer = document.getElementById("green");

var redPlayer = document.getElementById("red");

var startButton = document.getElementById("start");

var leftButton = document.getElementById("left");

var rightButton = document.getElementById("right");

var upButton = document.getElementById("up");

var downButton = document.getElementById("down");

var greenPlayerX = 0;

var greenPlayerY = 0;

var redPlayerX = 0;

var redPlayerY = 0;



var greenPlayerX = Math.floor(Math.random() * 500);

var greenPlayerY = Math.floor(Math.random() * 500);

var redPlayerX = Math.floor(Math.random() * 500);

var redPlayerY = Math.floor(Math.random() * 500);



greenPlayer.style.left = greenPlayerX + "px";

greenPlayer.style.top = greenPlayerY + "px";

redPlayer.style.left = redPlayerX + "px";

redPlayer.style.top = redPlayerY + "px";


startButton.onclick = function() {
    
    setInterval(function() {

        greenPlayerX = Math.floor(Math.random() * 500);

        greenPlayerY = Math.floor(Math.random() * 500);

        greenPlayer.style.left = greenPlayerX + "px";

        greenPlayer.style.top = greenPlayerY + "px";

    }, 1000);

};


leftButton.onclick = function() {
        
    redPlayerX -= 10;

    redPlayer.style.left = redPlayerX + "px";

};


rightButton.onclick = function() {
            
    redPlayerX += 10;

    redPlayer.style.left = redPlayerX + "px";

};


upButton.onclick = function() {

    redPlayerY -= 10;

    redPlayer.style.top = redPlayerY + "px";

}


downButton.onclick = function() {

    redPlayerY += 10;

    redPlayer.style.top = redPlayerY + "px";

}


