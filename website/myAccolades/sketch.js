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
  // text(message, 10, 80, 270, 80);
  testScoresDescript();
  ccDescript();
  hackathonDescript();
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

function testScoresDescript() {
  var testScoresDescriptBounds = document.getElementById('articleIconLight').getBoundingClientRect();
  var right = testScoresDescriptBounds.right;
  var left = testScoresDescriptBounds.left;
  var top = testScoresDescriptBounds.top;
  var bottom = testScoresDescriptBounds.bottom;
  // console.log(right + "  " + left + "  " + top + "  " + bottom);

  if(mouseX < 1219 && mouseX > 874 && mouseY < 440 && mouseY > 159) {
    document.getElementById('testScoresDescript').style.display = 'inline';
    document.getElementById('articleIconLight').style.display = 'none';
  }
  else {
    document.getElementById('testScoresDescript').style.display = 'none';
    document.getElementById('articleIconLight').style.display = 'inline';
  }
}

function ccDescript() {
  var ccDescriptBounds = document.getElementById('articleIcon').getBoundingClientRect();
  var right = ccDescriptBounds.right;
  var left = ccDescriptBounds.left;
  var top = ccDescriptBounds.top;
  var bottom = ccDescriptBounds.bottom;
  console.log(right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 397 && mouseX > 52 && mouseY < 439.8 && mouseY > 158.8) {
    document.getElementById('ccDescript').style.display = 'inline';
    document.getElementById('articleIcon').style.display = 'none';
  }
  else {
    document.getElementById('ccDescript').style.display = 'none';
    document.getElementById('articleIcon').style.display = 'inline';
  }
}

function hackathonDescript() {
  var hackathonDescriptionBounds = document.getElementById('hackathonIcon').getBoundingClientRect();
  var right = hackathonDescriptionBounds.right;
  var left = hackathonDescriptionBounds.left;
  var top = hackathonDescriptionBounds.top;
  var bottom = hackathonDescriptionBounds.bottom;
  console.log(right + "  " + left + "  " + top + "  " + bottom);
  // if(mouseX < 397 && mouseX > 52 && mouseY < 439.8 && mouseY > 158.8) {
  //   document.getElementById('ccDescript').style.display = 'inline';
  //   document.getElementById('hackathonDescript').style.display = 'none';
  // }
  // else {
  //   document.getElementById('ccDescript').style.display = 'none';
  //   document.getElementById('hackathonDescript').style.display = 'inline';
  // }
}
