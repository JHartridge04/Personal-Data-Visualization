let goat;



function setup(){
createCanvas(windowWidth, windowHeight);
background(255);
imageMode(CENTER);
}



function preload(){
    goat = loadImage('images/goat.png');
}

function draw(){

if (key === 'l') {
    linebrush();
} else if (key === 'e') {
    ellipsebrush();
} else if (key === 'i') {
    imagebrush();
}

if (key === 'c') {
    clear();
}

}


function linebrush(){
        stroke(random(255), random(255), random(255));
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function ellipsebrush(){
    
    if (mouseIsPressed) {
        fill(random(255), random(255), random(255));
    
        ellipse(mouseX, mouseY, 50, 50);
    }
}

function imagebrush(){
    if (mouseIsPressed) {
        image(goat, mouseX, mouseY, 50, 50);
    }
}