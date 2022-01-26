let faceRisingGif;
let whiteSquare;

function preload() {
  blueTile = loadImage('assets/bluetile-01.png');
  greenTile = loadImage('assets/greentile-01.png');
  faceRisingGif = loadImage('assets/FaceRisingNoLoop250.gif');
}

function setup() {
  //runs once
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
  background(0);
}

function draw() {
  background("white");

//variable for the number of squares per row
  var numSquares = windowWidth/faceRisingGif.width;
//variable for the side length of each square
  var sideLen = windowWidth/numSquares;
//iterates in y-direction to create rows in the y-direction
  var tileColor = true;
  for(var y = 0; y < windowHeight; y = y + sideLen) {
    //iterates in x-direction to create row of squares
    for(var x = 0; x < windowWidth; x = x + sideLen) {
      // var printXEdge = false;
      // if(x + sideLen > windowWidth) { printXEdge = true; }
      //
      // var printYEdge = false;
      // if(y + sideLen > windowHeight) { printYEdge = true; }
      //
      // if(y != sideLen || x == 0 || printXEdge || printYEdge) { image(faceRisingGif, x, y); }
       image(faceRisingGif, x, y);
  }
}

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
