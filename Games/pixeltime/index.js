var gameTable;
var gameTiles;
var colors = ["none", "red", "orange", "yellow", "green"];

console.log(colors.indexOf(""));
console.log(colors.indexOf("none"));
console.log(colors.indexOf("red"));
console.log(colors.indexOf("orange"));

function onLoadFunc() {
  gameTable = document.getElementById("game-table");
  //   console.log(gameTable);
  gameTiles = gameTable.getElementsByTagName("td");
  //   console.log(gameTiles);
  //   console.log(typeof gameTiles);

  for (let tile of gameTiles) {
    tile.setAttribute("class", "tile");
    tile.setAttribute("onclick", "changeColor(this)");
  }
}

function changeColor(tile) {
  console.log(tile);
  let currColor = tile.style.background;
  var colorIndex = colors.indexOf(currColor);
  console.log("currColor: " + currColor + " index: " + colorIndex);

  if (colorIndex == -1) {
    console.log("kkkkk");
    colorIndex = 0;
  } else if (colorIndex == colors.length - 1) {
    console.log("jjjjj");
    colorIndex = -1;
  }

  tile.style.background = colors[colorIndex + 1];
  console.log(
    "next color: " +
      tile.style.background +
      " index: " +
      colors.indexOf(tile.style.background)
  );
  //   console.log(colorIndex + 1);
  //   console.log(colors[colorIndex + 1]);
}

function colorToIndex() {}
