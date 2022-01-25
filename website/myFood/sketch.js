let fork;
let chef;
let paella;
let christmasFood;
let message;

function preload() {
  robotica = loadFont('../assets/robotica/ROBOTICA.TTF');
  fork = loadImage('../assets/fork.png');
  chef = loadImage('../assets/chef2.png');
  paella = loadImage('../assets/paella.png');
  christmasFood = loadImage('../assets/christmasFood.jpg');
  message = "PAGE UNDER CONSTRUCTION";
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
  image(paella, 10, 10);
  image(christmasFood, windowWidth - 610, 10);

  paellaDescript();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function paellaDescript() {
  if(mouseX < 544 && mouseX > 10 && mouseY < 720 && mouseY > 10) {
    document.getElementById('paellaDescript').style.display = "inline";
  }
  else {
    document.getElementById('paellaDescript').style.display = "none";
  }
}
