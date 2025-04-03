var gameTable;
var gameTiles;
var vertCoord;
var horizCoord;

var colors = ["white", "red", "orange", "yellow", "green"];
var level = 0;

function onLoadFunc() {
  gameTable = document.getElementById("game-table");
  gameTiles = gameTable.getElementsByTagName("td");

  var tileID = 1;
  for (let tile of gameTiles) {
    tile.setAttribute("id", "tile" + tileID);
    tileID++;
    tile.setAttribute("class", "tile");
    tile.setAttribute("onclick", "changeColor(this)");
  }

  populateCoordinates();
}

function populateCoordinates() {
  vertCoord = document.getElementById("vert-coord").getElementsByTagName("td");

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

function setUpGame() {}

// function startTimer() {
// var sec = 70;
// var timer = setInterval(function () {
//   if (sec > 59) {
//     document.getElementById("time-div").innerHTML = "01:" + (sec - 60);
//   } else if (sec > 9) {
//     document.getElementById("time-div").innerHTML = "00:" + sec;
//   } else {
//     document.getElementById("time-div").innerHTML = "00:0" + sec;
//   }
//   sec--;
//   if (sec < 0) {
//     clearInterval(timer);
//   }
// }, 1000);

function startTimer() {
  var timer = 10,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time-div").innerHTML = minutes + ":" + seconds;

    // display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
      timer = duration; // uncomment this line to reset timer automatically after reaching 0
    }
  }, 1000);
}

function setUpLevel(levelText) {
  levelText = levelText.textContent;
  level = levelText.slice(-1);
  console.log(level);
  popUp(levelText);

  //show image(level)
  //start timer
  //on end timer
  // gray out pixels
}

function popUp(levelText) {
  var levelpop = document.getElementById("level-popup");
  levelpop.textContent = levelText;

  var popup = document.getElementById("popup");
  popup.style.visibility = "visible";
}

function startLevel() {
  var popup = document.getElementById("popup");
  popup.style.visibility = "hidden";

  startTimer();
  showImage(level);
}

function showImage() {}
