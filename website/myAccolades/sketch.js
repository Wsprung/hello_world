let backgroundImg;
let message;

function preload() {
  backgroundImg = loadImage('../assets/bookshelfOneRow.png');
  message = "Expand your screen for the best experience!";
}
function setup() {
  let canvas = createCanvas(windowWidth, backgroundImg.height * 3.5);
  canvas.parent('sketch-container');
  // createCanvas(windowWidth, windowHeight + backgroundImg.height - 30);
}

function draw() {
  // image(backgroundImg, windowWidth/2 - 1375/2, windowHeight/2 - 768/2);
  background("black");
  backgroundImgPrint();
  fill("hotpink");
  textSize(20);
  text(message, 10, 80, 270, 80);
  nmsDescript();
  ccDescript();
}
function windowResized() {
  resizeCanvas(windowWidth, backgroundImg.height * 3.5);
}
function backgroundImgPrint() {
    var numSquares = windowWidth/backgroundImg.width;


  //variable for the length of each row
    var sideLen = windowWidth/numSquares;
  //iterates in y-direction to create rows in the y-direction
    for(var y = 0; y < backgroundImg.height * 4.5; y = y + backgroundImg.height) {
   //iterates in x-direction to create a bookshelf row
    for(var x = 0; x < windowWidth; x = x + sideLen) {
     image(backgroundImg, x, y);
    }
  }
}

function nmsDescript() {
  var nmsDescriptBounds = document.getElementById('articleIconLight').getBoundingClientRect();
  var right = nmsDescriptBounds.right;
  var left = nmsDescriptBounds.left;
  var top = nmsDescriptBounds.top;
  var bottom = nmsDescriptBounds.bottom;
  console.log(right + "  " + left + "  " + top + "  " + bottom);

  if(mouseX < 1349 && mouseX > 984 && mouseY < 440 && mouseY > 159) {
    document.getElementById('nmsDescript').style.display = 'inline';
    document.getElementById('articleIconLight').style.display = 'none';
  }
  else {
    document.getElementById('nmsDescript').style.display = 'none';
    document.getElementById('articleIconLight').style.display = 'inline';
  }
}

function ccDescript() {
  var ccDescriptBounds = document.getElementById('articleIcon').getBoundingClientRect();
  var right = ccDescriptBounds.right;
  var left = ccDescriptBounds.left;
  var top = ccDescriptBounds.top;
  var bottom = ccDescriptBounds.bottom;
  // console.log(right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 397 && mouseX > 52 && mouseY < 440 && mouseY > 159) {
    document.getElementById('ccDescript').style.display = 'inline';
    document.getElementById('articleIcon').style.display = 'none';
  }
  else {
    document.getElementById('ccDescript').style.display = 'none';
    document.getElementById('articleIcon').style.display = 'inline';
  }
}
