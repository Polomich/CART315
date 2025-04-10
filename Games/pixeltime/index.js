// import l1 from "./levels.js";
let levels = [
  [],
  [
    [
      "red",
      56,
      57,
      71,
      72,
      73,
      74,
      86,
      87,
      88,
      89,
      90,
      91,
      102,
      103,
      104,
      105,
      106,
      107,
    ],
    ["blanchedalmond", 120, 121, 136, 137],
  ],
  [
    ["red", 54, 56, 58, 70, 71, 72, 73, 74, 86, 87, 88, 89, 90, 103, 104, 105],
    ["darkgreen", 120, 134, 136, 138, 151, 152, 153, 168, 184],
  ],
];

var gameTable;
var gameTiles;
var vertCoord;
var horizCoord;

var colors = [];
var level = 0;

window.onload = function onLoadFunc() {
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
};

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

function startTimer() {
  var interval;

  var timer = 10,
    minutes,
    seconds;

  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time-div").innerHTML = minutes + ":" + seconds;

    //when timer ends
    if (--timer < 0) {
      timer = 0;
      clearInterval(interval);
      grayOut();
      // timer = 5; // uncomment this line to reset timer automatically after reaching 0
    }
  }, 1000);
}

function setUpLevel(levelText) {
  console.log(levelText);
  //clear board
  clearBoard();
  var winlose = document.getElementById("winlose");
  winlose.style.visibility = "hidden";

  //level level
  levelText = levelText.textContent;
  level = levelText.slice(-1);
  popUp(levelText);
  document.getElementById("level-num").textContent = level;

  //level colors
  colors = [];
  for (let index = 0; index < levels[level].length; index++) {
    colors.push(levels[level][index][0]);
  }
  colors.push("white");
  console.log(colors);

  //tile color list
  var tileuls = document.getElementById("tile-ul").getElementsByTagName("li");
  for (let index = 0; index < colors.length - 1; index++) {
    tileuls[index].style.visibility = "visible";
    tileuls[index].getElementsByTagName("div")[0].style.background =
      colors[index];
    var numoftiles = levels[level][index].length - 1;
    tileuls[index].getElementsByTagName("h4")[0].textContent = numoftiles;
  }

  //show image(level)
  //start timer
  //on end timer
  // gray out pixels
}

function clearBoard() {
  for (let tile of gameTiles) {
    tile.style.background = "white";
  }
}

function popUp(levelText) {
  var popwrap = document.getElementById("popup-wrapper");
  popwrap.style.zIndex = "0";
  var levelpop = document.getElementById("level-popup");
  levelpop.textContent = levelText;

  var popup = document.getElementById("popup");
  popup.style.visibility = "visible";
  console.log("popup");
}

function winlose(win) {
  var text, bg;
  if (win == true) {
    text = "Congrats you won!";
    bg = "lime";
  } else {
    text = "Not good enough.";
    bg = "maroon";
  }

  var winlose = document.getElementById("winlose");
  winlose.textContent = text;
  winlose.style.background = bg;
  winlose.style.visibility = "visible";
}

function startLevel() {
  var popup = document.getElementById("popup");
  popup.style.visibility = "hidden";

  startTimer();
  showImage();
}

function showImage() {
  var color, id;

  for (var i = 0; i < levels[level].length; i++) {
    color = levels[level][i][0];
    id = 0;
    for (var j = 1; j < levels[level][i].length; j++) {
      id = "tile" + levels[level][i][j];
      document.getElementById(id).style.background = color;
    }
  }
}

function grayOut() {
  var popwrap = document.getElementById("popup-wrapper");
  popwrap.style.zIndex = "-1";

  for (let tile of gameTiles) {
    if (tile.style.background != "white") {
      tile.style.background = "gainsboro";
    }
  }
}

function checkDone() {
  var id;
  var win = true;
  console.log("level " + level);
  //manually checking bc i am out of patience
  if (level == 1) {
    for (let index = 1; index <= 224; index++) {
      id = "tile" + index;
      // check red
      if (
        index == 56 ||
        index == 57 ||
        index == 71 ||
        index == 72 ||
        index == 73 ||
        index == 74 ||
        index == 86 ||
        index == 87 ||
        index == 88 ||
        index == 89 ||
        index == 90 ||
        index == 91 ||
        index == 102 ||
        index == 103 ||
        index == 104 ||
        index == 105 ||
        index == 106 ||
        index == 107
      ) {
        if (document.getElementById(id).style.background != "red") {
          win = false;
          break;
        }
      }
      //check beige
      else if (index == 120 || index == 121 || index == 136 || index == 137) {
        if (document.getElementById(id).style.background != "blanchedalmond") {
          win = false;
          break;
        }
      }
      //check white
      else {
        if (
          document.getElementById(id).style.background == "red" ||
          document.getElementById(id).style.background == "gainsboro"
        ) {
          win = false;
          break;
        }
      }
    }
  } //end level 1 check
  //manual check for level 2
  else {
    for (let index = 1; index <= 224; index++) {
      id = "tile" + index;
      console.log(id);
      // check red
      if (
        index == 54 ||
        index == 56 ||
        index == 58 ||
        index == 70 ||
        index == 71 ||
        index == 72 ||
        index == 73 ||
        index == 74 ||
        index == 86 ||
        index == 87 ||
        index == 88 ||
        index == 89 ||
        index == 90 ||
        index == 103 ||
        index == 104 ||
        index == 105
      ) {
        if (document.getElementById(id).style.background != "red") {
          win = false;
          break;
        }
      }
      //check green
      else if (
        index == 120 ||
        index == 134 ||
        index == 136 ||
        index == 138 ||
        index == 151 ||
        index == 152 ||
        index == 153 ||
        index == 168 ||
        index == 184
      ) {
        if (document.getElementById(id).style.background != "darkgreen") {
          win = false;
          break;
        }
      }
      //check white
      else {
        if (
          document.getElementById(id).style.background == "red" ||
          document.getElementById(id).style.background == "darkgreen"
        ) {
          win = false;
          break;
        }
      }
    }
  }
  console.log(win);

  winlose(win);
}

// function checkDone() {
//   // var win = true;

//   // var tilecolor, id, currtile;

//   // for (let index = 1; index <= 224; index++) {
//   //   id = "tile" + index;
//   //   currtile = document.getElementById(id);
//   //   tilecolor = currtile.style.background;
//   //   console.log(id);

//   //   if (tilecolor == "white") {
//   //     //if tile is supposed to be colored
//   //     if (levels[level][0].find(index) != undefined) {
//   //       win = false; // lose
//   //       break;
//   //     }
//   //   }
//   //   // not white
//   //   else {
//   //     for (let j = 0; j < colors.length - 1; j++) {
//   //       var checkingColor = colors[j];
//   //       if (tilecolor == checkingColor) {
//   //         //if tile is not the correct color
//   //         if (levels[level][j].find(index) == undefined) {
//   //           win = false; // lose
//   //           break;
//   //         }
//   //       }
//   //     }
//   //   }
//   } // done checking all tiles

//   // for (var i = 0; i < levels[level].length; i++) {
//   //   color = levels[level][i][0];

//   //   for (var j = 1; j < levels[level][i].length; j++) {

//   //     id = "tile" + tilessofar;
//   //     currtile = document.getElementById(id);
//   //     console.log(id + "" + currtile);

//   //     if()

//   //     // //white tile not in image
//   //     // if (tilessofar != levels[level][i][j]) {
//   //     //   if (document.getElementById(id).style.background != "white") {
//   //     //     win = false;
//   //     //     // break;
//   //     //   }
//   //     // }
//   //     // //tile part of the image
//   //     // else {
//   //     //   if (document.getElementById(id).style.background != color) {
//   //     //     win = false;
//   //     //     // break;
//   //     //   }
//   //     // }
//   //     tilessofar++;
//   //   }
//   // }
//   console.log(win);
// }
