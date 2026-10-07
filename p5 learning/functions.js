let goatImage;
let yPos;
let xPos;
let ySpeed;
let xSpeed;

let herdGoats = [];
const herdSize = 8;

let sunPositions = [];
let sunIndex = 0;
let sunDirection = 1;


function preload(){
  goatImage = loadImage('images/goat.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  xPos = width / 2;
  yPos = windowHeight - 200;
  xSpeed = 2;
  ySpeed = 0;
  spawnHerd(herdSize);
  sunPositions = [
    { x: windowWidth * 0.2, y: windowHeight - 280 },
    { x: windowWidth * 0.35, y: windowHeight * 0.35 },
    { x: windowWidth * 0.5, y: windowHeight * 0.18 },
    { x: windowWidth * 0.65, y: windowHeight * 0.35 },
    { x: windowWidth * 0.8, y: windowHeight - 280 }
  ];
  loop();
}
function draw(){
    background(135, 206, 235);
    pasture();
    noStroke()
    fill(255, 220, 50);
    let sunPos = sunPositions[sunIndex];
    ellipse(sunPos.x, sunPos.y, 100, 100);
    fill(75, 140, 55);
    rect(0, windowHeight - 280, windowWidth, 280);
    image(goatImage, xPos, yPos);
    
    
    if (mouseIsPressed) {
     herd();
    }


}

function keyPressed(){
  Sunrise();
}

function Sunrise(){
  sunIndex += sunDirection;
  if (sunIndex >= sunPositions.length - 1) {
    sunIndex = sunPositions.length - 1;
    sunDirection = -1;
  } else if (sunIndex <= 0) {
    sunIndex = 0;
    sunDirection = 1;
  }
}


function pasture(){
  xPos += xSpeed;

  const margin = 60;
  if (xPos > windowWidth - margin || xPos < margin) {
    xSpeed *= -1;
  }

}


function spawnHerd(count) {
  herdGoats = [];
  for (let i = 0; i < count; i++) {
    herdGoats.push({
      x: random(60, windowWidth - 60),
      y: random(windowHeight - 220, windowHeight - 60),
      xSpeed: random(1, 3) * random([-1, 1]),
      ySpeed: random(0.5, 1.5) * random([-1, 1])
    });
  }
}

function herd() {
  const margin = 60;
  const grassTop = windowHeight - 280;

  for (let goat of herdGoats) {
    goat.x += goat.xSpeed;
    goat.y += goat.ySpeed;

    if (goat.x > windowWidth - margin || goat.x < margin) {
      goat.xSpeed *= -1;
    }
    if (goat.y > windowHeight - margin || goat.y < grassTop + margin) {
      goat.ySpeed *= -1;
    }

    image(goatImage, goat.x, goat.y, 70, 70);
  }
}