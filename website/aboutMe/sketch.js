var slideshowCount = 0;
var bros;
var parents;
var roomPic;

function preload() {
}

function setup() {
  //runs once
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
}

function draw() {
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function slideShow(direction) {
  bros = document.getElementById('bros');
  parents = document.getElementById('parents');
  roomPic = document.getElementById('roomPic');
  var picToShow = new Array(bros, parents, roomPic);
  var picCaptions = new Array("My twin older brothers and I when we first got our dog, Rusty.", "My parents and I on the first day of my senior year.", "Me when I was 8 with my stuffed animals. I used to love collecting them.")

  picToShow[slideshowCount].style.display = "none";

  if(direction == "forward") {
    slideshowCount++;
    if(slideshowCount > 2) {
      slideshowCount = 0;
    }
  }

  if(direction == "backward") {
    slideshowCount--;
    if(slideshowCount < 0) {
      slideshowCount = 2;
    }
  }

  picToShow[slideshowCount].style.display = "inline";
  document.getElementById('imageDescript').innerHTML = picCaptions[slideshowCount];
    document.getElementById('imageDescript').style.fontStyle = "italic";
}
