let xPos 
let yPos 
let ballSize = 50

let xSpeed = 4
let ySpeed = 4
let startgame = false
let wingame = false
let score = 0
let mouseDistance
function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2
	

}
function startGame(){
	background(0)

    fill(255)
    textSize(32)
    textAlign(CENTER, CENTER)
    text("Tag the ball with your mouse! Your score is: " + score + " points.", windowWidth/2, 50)
	ellipse(xPos, yPos, ballSize, ballSize)

	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	if(xPos >= windowWidth - ballSize/2 || xPos <= ballSize/2){
		xSpeed = xSpeed * -1
		fill(random(255), random(255), random(255))
	}

	if(yPos >= windowHeight - ballSize/2 || yPos <= ballSize/2){
		ySpeed = ySpeed * -1
		fill(random(255), random(255), random(255))
	}

    pointScored()
    if (score >= 15){
        winGame()
        noLoop()
    }
}


function winGame(){
	background(0, 255, 0)
	textAlign(CENTER, CENTER)
	textSize(32)
	text("You win! Your final score is: " + score + " points.", windowWidth/2, windowHeight/2)
}

function pointScored(){
    mouseDistance = dist(mouseX, mouseY, xPos, yPos)
    if (mouseDistance < ballSize){
        score++
        xPos = random(ballSize/2, windowWidth - ballSize/2)
        yPos = random(ballSize/2, windowHeight - ballSize/2)
        xSpeed *= 1.2
        ySpeed *= 1.1
        fill(random(255), random(255), random(255))
    }
}

function draw(){
	startGame()
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}