var gameTable;
var gameTiles;
var colors = ["white", "red", "orange", "yellow", "green"];
var vertCoord;
var horizCoord;

function onLoadFunc() {
  gameTable = document.getElementById("game-table");
  gameTiles = gameTable.getElementsByTagName("td");

  for (let tile of gameTiles) {
    tile.setAttribute("class", "tile");
    tile.setAttribute("onclick", "changeColor(this)");
  }

  populateCoordinates();
}

function populateCoordinates() {
  vertCoord = document.getElementById("vert-coord").getElementsByTagName("td");
  console.log(vertCoord);

  var i = 1;
  for (let tile of vertCoord) {
    tile.textContent = i;
    i++;
  }

  horizCoord = document
    .getElementById("horiz-coord")
    .getElementsByTagName("td");
  i = 65;
  for (let tile of horizCoord) {
    tile.textContent = String.fromCharCode(i);
    i++;
  }
}

function changeColor(tile) {
  let currColor = tile.style.background;
  var colorIndex = colors.indexOf(currColor);

  if (colorIndex == -1) {
    colorIndex = 0;
  } else if (colorIndex == colors.length - 1) {
    colorIndex = -1;
  }

  tile.style.background = colors[colorIndex + 1];
}

function setUpGame(){

}


