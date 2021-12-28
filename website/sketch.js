let faceRisingGif;
let whiteSquare;

function preload() {
  faceRisingGif = loadImage('assets/FaceRisingNoLoop250.gif');
  whiteSquare = loadImage('assets/white_square.png')
}

function setup() {
  //runs once
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
  background(0);
}

function draw() {
  background(0);

//variable for the number of squares per row
  var numSquares = windowWidth/faceRisingGif.width;
//variable for the side length of each square
  var sideLen = windowWidth/numSquares;
//iterates in y-direction to create rows in the y-direction
  for(var y = 0; y < windowHeight; y = y + sideLen) {
    //iterates in x-direction to create row of squares
    for(var x = 0; x < windowWidth; x = x + sideLen) {
      var printXEdge = false;
      if(x + sideLen > windowWidth) { printXEdge = true; }

      var printYEdge = false;
      if(y + sideLen > windowHeight) { printYEdge = true; }

      if(y != sideLen || x == 0 || printXEdge || printYEdge) { image(faceRisingGif, x, y); }
      else { image(whiteSquare, x, y); }
  }
}
//placing archiveHeader in sketch.js so it can be edited in JavaScript
  let archiveHeader = document.getElementById('archiveHeader');
  archiveHeader.style.left = "blue";

  // var name = document.getElementById('usersName').value; -> saves value from input bar
  // document.getElementById('hiToUser').innerHTML = name;


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//the following code simulates a sleep for short periods of time
//sleep(1000) = 1 second
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
    break;
  }
}
}
