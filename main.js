let nightMode = false;
let mountainColorIndex = 0;
let goatImage;
const mountainColors = [
  [129, 133, 137],
  [180, 100, 60],
  [80, 120, 80],
  [100, 80, 160],
  [200, 160, 80]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noLoop();
}

function preload(){
  goatImage = loadImage('images/goat.png');
}

function mousePressed() {
  nightMode = !nightMode;
  redraw();
}

function keyPressed() {
  mountainColorIndex = (mountainColorIndex + 1) % mountainColors.length;
  redraw();
}

function draw() {
  const hscale = width / 800; // horizontal scale factor relative to original 800px design
  if (nightMode) {
    background(10, 20, 60);
    noStroke();

    // Moon
    fill(255);
    ellipse(680 * hscale, 110, 120, 120);

    // Clouds
    fill(255, 255, 255);
    ellipse(150 * hscale, 120, 130, 55);
    ellipse(210 * hscale, 100, 100, 50);
    ellipse(460 * hscale, 85, 150, 55);
    ellipse(530 * hscale, 68, 110, 50);

    // Mountains
    fill(...mountainColors[mountainColorIndex]);
    triangle(0, 520, 220 * hscale, 210, 430 * hscale, 520);
    triangle(220 * hscale, 520, 460 * hscale, 185, 700 * hscale, 520);
    triangle(450 * hscale, 520, 690 * hscale, 255, 850 * hscale, 520);

    // Snow caps
    fill(255, 255, 255);
    triangle(154 * hscale, 303, 220 * hscale, 210, 283 * hscale, 303);
    triangle(393 * hscale, 279, 460 * hscale, 185, 527 * hscale, 279);
    triangle(623 * hscale, 329, 690 * hscale, 255, 735 * hscale, 329);


    // Ground
    fill(75, 140, 55);
    rect(0, windowHeight - 280, windowWidth, 280);

    // River
    fill(100, 175, 220);
    rect(330 * hscale, windowHeight - 280, 140 * hscale, 280);

    // Left Side trees
    fill(90, 58, 28);
    rect(118 * hscale, 545, 28 * hscale, 100);
    fill(35, 105, 35);
    triangle(82 * hscale, 545, 132 * hscale, 395, 182 * hscale, 545);

    fill(90, 58, 28);
    rect(78 * hscale, 645, 28 * hscale, 100);
    fill(35, 105, 35);
    triangle(38 * hscale, 645, 95 * hscale, 545, 148 * hscale, 645);

    // Right Side trees
    fill(90, 58, 28);
    rect(602 * hscale, 545, 28 * hscale, 100);
    fill(35, 105, 35);
    triangle(566 * hscale, 545, 616 * hscale, 395, 666 * hscale, 545);

    fill(90, 58, 28);
    rect(622 * hscale, 645, 28 * hscale, 100);
    fill(35, 105, 35);
    triangle(586 * hscale, 645, 643 * hscale, 545, 696 * hscale, 645);
    // Goat
    image(goatImage, 400 * hscale, windowHeight - 200, 100, 100);
  } else {
    // Sky
    background(135, 206, 235);
    noStroke();

    // Sun
    fill(255, 220, 50);
    ellipse(680 * hscale, 110, 120, 120);

    // Clouds
    fill(255, 255, 255);
    ellipse(150 * hscale, 120, 130, 55);
    ellipse(210 * hscale, 100, 100, 50);
    ellipse(460 * hscale, 85, 150, 55);
    ellipse(530 * hscale, 68, 110, 50);

    // Mountains
    fill(...mountainColors[mountainColorIndex]);
    triangle(0, 520, 220 * hscale, 210, 430 * hscale, 520);
    triangle(220 * hscale, 520, 460 * hscale, 185, 700 * hscale, 520);
    triangle(450 * hscale, 520, 690 * hscale, 255, 850 * hscale, 520);

    // Snow caps
    fill(255, 255, 255);
    triangle(154 * hscale, 303, 220 * hscale, 210, 283 * hscale, 303);
    triangle(393 * hscale, 279, 460 * hscale, 185, 527 * hscale, 279);
    triangle(623 * hscale, 329, 690 * hscale, 255, 735 * hscale, 329);

    // Ground
    fill(75, 140, 55);
    rect(0, windowHeight - 280, windowWidth, 280);

    // River
    fill(100, 175, 220);
    rect(330 * hscale, windowHeight - 280, 140 * hscale, 280);

    // Left Side trees
    fill(90, 58, 28);
    rect(118 * hscale, 545, 28 * hscale, 100);
    fill(35, 105, 35);
    triangle(82 * hscale, 545, 132 * hscale, 395, 182 * hscale, 545);

    fill(90, 58, 28);
    rect(78 * hscale, 645, 28 * hscale, 100);
    fill(35, 105, 35);
    triangle(38 * hscale, 645, 95 * hscale, 545, 148 * hscale, 645);

    // Right Side trees
    fill(90, 58, 28);
    rect(602 * hscale, 545, 28 * hscale, 100);
    fill(35, 105, 35);
    triangle(566 * hscale, 545, 616 * hscale, 395, 666 * hscale, 545);

    fill(90, 58, 28);
    rect(622 * hscale, 645, 28 * hscale, 100);
    fill(35, 105, 35);
    triangle(586 * hscale, 645, 643 * hscale, 545, 696 * hscale, 645);
    // Goat
    image(goatImage, 400 * hscale, windowHeight - 200, 100, 100);
  }
}

