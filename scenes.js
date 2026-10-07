
function preload(){
  kid = loadImage('images/Child1.png');
  lego = loadImage('images/legobx.png');
  tv = loadImage('images/tv.png');
  xbox = loadImage('images/xbox.png');
  teen = loadImage('images/teen.png');
  cat = loadImage('images/cat.png');
  minecraft = loadImage('images/minecraft.png');
  laptop = loadImage('images/laptop.png');
  grad = loadImage('images/grad.png');
  school = loadImage('images/school.png');
}


function lifeNode1() {
    drawLifeNode1Scene();
}

function lifeNode2() {
	drawLifeNode2Scene();
}

function computerScienceNode1() {
	drawComputerScienceNode1Scene();
}

function computerScienceNode2() {
	drawComputerScienceNode2Scene();
}

function computerScienceNode3() {
	drawComputerScienceNode3Scene();
}

function futureNode() {
	drawFutureNodeScene();
}

/*-----------------------------------------------*/


function drawLifeNode1Scene(){
	background(137, 81, 41);
	const textBottom = drawSceneText('When I was young I had an obsession with building imaginary structures with anything I could find to satisfy my imagination. ' +
		'As a result my parents starting buying me lego pieces so that i could continues build up and break down things ' +
		'whenever i wanted.');

	drawSceneGround(255, 0, 0, 127);
	const imageTop = getSceneImageTop(textBottom, 0.34);
	const imageHeight = Math.max(0, height * 0.76 - imageTop);
	drawSceneImage(kid, width * 0.28, imageTop, width * 0.32, imageHeight);
	drawSceneImage(lego, width * 0.76, imageTop, width * 0.38, imageHeight);
}

function drawLifeNode2Scene(){
	background(137, 81, 41);
	const textBottom = drawSceneText('When I was young I grew up with technology all around me and as I used it more and more, I became enamored with it and wanted to use it wherever and whenever I could. ' +
		'As a result my parents started buying me various technological devices so that I could continue exploring and experimenting with them whenever I wanted.');

	drawSceneGround(155);
	const imageTop = getSceneImageTop(textBottom, 0.34);
	const imageHeight = Math.max(0, height * 0.76 - imageTop);
	drawSceneImage(kid, width * 0.20, imageTop, width * 0.25, imageHeight);
	drawSceneImage(tv, width * 0.58, imageTop, width * 0.28, imageHeight);
	drawSceneImage(xbox, width * 0.83, imageTop, width * 0.24, imageHeight);
}


function drawComputerScienceNode1Scene(){
	drawSchoolTileWall();
	const textBottom = drawSceneText('Blazing off of my passion to build things and love for technology, during middle school I picked a gaming class where we would go to the computer lab and use Scratch with its building block interface to create our own playable game. This combined two of my passions into something that I enjoyed even more.');
	drawSceneGround(137, 81, 41);
	const imageTop = getSceneImageTop(textBottom, 0.34);
	const imageHeight = Math.max(0, height * 0.76 - imageTop);
	drawSceneImage(teen, width * 0.32, imageTop, width * 0.32, imageHeight);
	drawSceneImage(cat, width * 0.76, imageTop, width * 0.30, imageHeight);
}

function drawComputerScienceNode3Scene(){
	drawSchoolTileWall();
	const textBottom = drawSceneText('Blazing off of my passion to build things and love for technology, during middle school I joined a Minecraft club where we would use Minecraft as a platform to create different art and projects rather than just playing the game to completion.');
	drawSceneGround(137, 81, 41);
	const imageTop = getSceneImageTop(textBottom, 0.34);
	const imageHeight = Math.max(0, height * 0.76 - imageTop);
	drawSceneImage(teen, width * 0.32, imageTop, width * 0.32, imageHeight);
	drawSceneImage(minecraft, width * 0.74, imageTop, width * 0.34, imageHeight);
}

function drawComputerScienceNode2Scene(){
	background(137, 81, 41);
	const textBottom = drawSceneText('As I grew up I continued to be investing in these two things, which I expressed through gaming where as silly as it might sound, gave experience grinding through tough problems and persevering till the end, transforming might source of enjoyment from pure fascination to the feeling you get when you finally solve a hard problem. This would come in handy later on.');
	drawSceneGround(155);
	const imageTop = getSceneImageTop(textBottom, 0.34);
	const imageHeight = Math.max(0, height * 0.76 - imageTop);
	drawSceneImage(teen, width * 0.18, imageTop, width * 0.24, imageHeight);
	drawSceneImage(laptop, width * 0.50, imageTop, width * 0.28, imageHeight);
	drawSceneImage(xbox, width * 0.82, imageTop, width * 0.24, imageHeight);
}

function drawFutureNodeScene(){
	background(135, 206, 235);
	const textBottom = drawSceneText('I would continue down this funnel towards computer science in high school by taking a coding/cs class every semester. This would all culminate when I graduated high school and planned to enter college majoring in computer science. Similarly to how my different experiences connected to lead me down this path, AI use neural networks to funnel information and train themselves to "think" like humans. I find it funny how one of the next challenges in my journey is to correctly use a tool trained to mirror me.');
	noStroke();
	fill(0, 255, 0);
	rect(0, height * 0.61, width, height * 0.39);
	fill(155);
	rect(0, height * 0.74, width, height * 0.26);
	stroke(255, 220, 80);
	strokeWeight(Math.max(4, width * 0.005));
	const stripeY = height * 0.87;
	for (let stripeX = width * 0.02; stripeX < width; stripeX += width * 0.08) {
		line(stripeX, stripeY, stripeX + width * 0.04, stripeY);
	}
	const imageTop = getSceneImageTop(textBottom, 0.36);
	drawSceneImage(grad, width * 0.28, Math.max(imageTop, height * 0.59), width * 0.24, height * 0.34);
	drawSceneImage(school, width * 0.73, Math.max(imageTop, height * 0.36), width * 0.34, height * 0.57);
}

function drawSceneText(content){
	const marginX = width * 0.05;
	const fontSize = constrain(Math.min(width * 0.026, height * 0.048), 22, 36);
	const lineHeight = fontSize * 1.2;
	const maxTextWidth = width - marginX * 2;
	const lines = [];
	let currentLine = "";

	textSize(fontSize);
	textLeading(lineHeight);
	textAlign(LEFT, TOP);
	fill(255);
	noStroke();

	content.split(/\s+/).forEach(word => {
		const candidate = currentLine ? `${currentLine} ${word}` : word;
		if (currentLine && textWidth(candidate) > maxTextWidth) {
			lines.push(currentLine);
			currentLine = word;
		} else {
			currentLine = candidate;
		}
	});

	if (currentLine) {
		lines.push(currentLine);
	}

	const top = height * 0.045;
	lines.forEach((line, index) => {
		text(line, marginX, top + index * lineHeight);
	});

	return top + lines.length * lineHeight;
}

function drawSceneGround(red, green, blue, alpha = 255){
	noStroke();
	fill(red, green, blue, alpha);
	rect(0, height * 0.76, width, height * 0.24);
}

function getSceneImageTop(textBottom, minimumRatio){
	return Math.max(textBottom + height * 0.025, height * minimumRatio);
}

function drawSceneImage(sceneImage, centerX, topY, maxWidth, maxHeight){
	if (maxHeight <= 0) {
		return;
	}

	const scale = Math.min(maxWidth / sceneImage.width, maxHeight / sceneImage.height);
	const imageWidth = sceneImage.width * scale;
	const imageHeight = sceneImage.height * scale;
	image(sceneImage, centerX - imageWidth / 2, topY + (maxHeight - imageHeight) / 2, imageWidth, imageHeight);
}


function drawSchoolTileWall(){
	const tileWidth = width / 3;
	const tileHeight = height / 3;
	const tileColors = [
		[225, 218, 192],
		[232, 225, 200],
		[220, 213, 188]
	];

	background(215, 208, 184);
	stroke(105, 99, 79);
	strokeWeight(2);

	for (let row = 0; row < 3; row += 1) {
		for (let column = 0; column < 3; column += 1) {
			const colorIndex = (row + column) % tileColors.length;
			fill(tileColors[colorIndex][0], tileColors[colorIndex][1], tileColors[colorIndex][2]);
			rect(column * tileWidth, row * tileHeight, tileWidth, tileHeight);
		}
	}
}
