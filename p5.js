let nightMode = false;
let mountainColorIndex = 0;
const mountainColors = [
  [129, 133, 137],
  [180, 100, 60],
  [80, 120, 80],
  [100, 80, 160],
  [200, 160, 80]
];

function setup() {
  createCanvas(800, 800);
  noLoop();
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
  if (nightMode) {
    background(10, 20, 60);
    noStroke();

    // Moon
    fill(255);
    ellipse(680, 110, 120, 120);

    // Clouds
    fill(255, 255, 255);
    ellipse(150, 120, 130, 55);
    ellipse(210, 100, 100, 50);
    ellipse(460, 85, 150, 55);
    ellipse(530, 68, 110, 50);

    // Mountains
    fill(...mountainColors[mountainColorIndex]);
    triangle(0, 520, 220, 210, 430, 520);
    triangle(220, 520, 460, 185, 700, 520);
    triangle(450, 520, 690, 255, 850, 520);

    // Snow caps
    fill(255, 255, 255);
    triangle(154, 303, 220, 210, 283, 303);
    triangle(393, 279, 460, 185, 527, 279);
    triangle(623, 329, 690, 255, 735, 329);

    // Ground
    fill(75, 140, 55);
    rect(0, 520, 800, 280);

    // River
    fill(100, 175, 220);
    rect(330, 520, 140, 280);

    // Left Side trees
    fill(90, 58, 28);
    rect(118, 545, 28, 100);
    fill(35, 105, 35);
    triangle(82, 545, 132, 395, 182, 545);

    fill(90, 58, 28);
    rect(78, 645, 28, 100);
    fill(35, 105, 35);
    triangle(38, 645, 95, 545, 148, 645);

    // Right Side trees
    fill(90, 58, 28);
    rect(602, 545, 28, 100);
    fill(35, 105, 35);
    triangle(566, 545, 616, 395, 666, 545);

    fill(90, 58, 28);
    rect(622, 645, 28, 100);
    fill(35, 105, 35);
    triangle(586, 645, 643, 545, 696, 645);
  } else {
    // Sky
    background(135, 206, 235);
    noStroke();

    // Sun
    fill(255, 220, 50);
    ellipse(680, 110, 120, 120);

    // Clouds
    fill(255, 255, 255);
    ellipse(150, 120, 130, 55);
    ellipse(210, 100, 100, 50);
    ellipse(460, 85, 150, 55);
    ellipse(530, 68, 110, 50);

    // Mountains
    fill(...mountainColors[mountainColorIndex]);
    triangle(0, 520, 220, 210, 430, 520);
    triangle(220, 520, 460, 185, 700, 520);
    triangle(450, 520, 690, 255, 850, 520);

    // Snow caps
    fill(255, 255, 255);
    triangle(154, 303, 220, 210, 283, 303);
    triangle(393, 279, 460, 185, 527, 279);
    triangle(623, 329, 690, 255, 735, 329);

    // Ground
    fill(75, 140, 55);
    rect(0, 520, 800, 280);

    // River
    fill(100, 175, 220);
    rect(330, 520, 140, 280);

    // Left Side trees
    fill(90, 58, 28);
    rect(118, 545, 28, 100);
    fill(35, 105, 35);
    triangle(82, 545, 132, 395, 182, 545);

    fill(90, 58, 28);
    rect(78, 645, 28, 100);
    fill(35, 105, 35);
    triangle(38, 645, 95, 545, 148, 645);

    // Right Side trees
    fill(90, 58, 28);
    rect(602, 545, 28, 100);
    fill(35, 105, 35);
    triangle(566, 545, 616, 395, 666, 545);

    fill(90, 58, 28);
    rect(622, 645, 28, 100);
    fill(35, 105, 35);
    triangle(586, 645, 643, 545, 696, 645);

  }
}

