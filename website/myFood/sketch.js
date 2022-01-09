let fork;
let chef;
let paella;

function preload() {
  fork = loadImage('../assets/fork.png');
  chef = loadImage('../assets/chef2.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
  // background(30, 40, 80);
}

function draw() {
  cursor('../assets/fork.png');

  var numSquares = windowWidth/chef.width;

//variable for the side length of each square
  var sideLen = windowWidth/numSquares;
//iterates in y-direction to create rows in the y-direction
 //var placeGif = true;
  for(var y = 0; y < windowHeight; y = y + sideLen + 10) {
 //iterates in x-direction to create row of squares
  for(var x = 0; x < windowWidth; x = x + sideLen) {
     image(chef, x, y);
   }
  }

}
