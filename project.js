
/* Node Logic and Project Starting Point */

let nodes = [];
let selectedNode = null;
let sceneNavigationButtons = [];
const connections = [
    ["life-1", "computer science-1"],
    ["life-1", "computer science-2"],
    ["life-1", "computer science-3"],
    ["life-2", "computer science-1"],
    ["life-2", "computer science-2"],
    ["life-2", "computer science-3"],
    ["computer science-1", "computer science-2"],
    ["computer science-2", "computer science-3"],
    ["computer science-1", "future-3"],
    ["computer science-2", "future-3"],
    ["computer science-3", "future-3"]
];

function setup() {
    createCanvas(windowWidth, windowHeight);
    createNodes();
}

function createNodes() {
    const centerX = width / 2;
    const centerY = height / 2;
    nodes = [
        {
            id: "life-1",
            group: "life",
            label: "Life 1",
            x: centerX - 240,
            y: centerY - 40,
            scene: drawLifeNode1Scene
        },
        {
            id: "life-2",
            group: "life",
            label: "Life 2",
            x: centerX - 240,
            y: centerY + 40,
            scene: drawLifeNode2Scene
        },
        {
            id: "computer science-1",
            group: "computer science",
            label: "CS 1",
            x: centerX,
            y: centerY - 80,
            scene: drawComputerScienceNode1Scene
        },
        {
            id: "computer science-2",
            group: "computer science",
            label: "CS 2",
            x: centerX,
            y: centerY,
            scene: drawComputerScienceNode2Scene
        },
        {
            id: "computer science-3",
            group: "computer science",
            label: "CS 3",
            x: centerX,
            y: centerY + 80,
            scene: drawComputerScienceNode3Scene
        },
        {
            id: "future-3",
            group: "future",
            label: "Future",
            x: centerX + 240,
            y: centerY + 40,
            scene: drawFutureNodeScene
        }
    ];
}

function draw() {
    if (selectedNode) {
        imageMode(CORNER);
        selectedNode.scene();
        drawSceneNavigation();
        return;
    }

    background(8, 8, 28);
    drawConnections();
    drawNodes();
}

function drawConnections() {
    stroke(70, 170, 210, 120);
    strokeWeight(2);

    connections.forEach(([startId, endId]) => {
        const startNode = nodes.find(node => node.id === startId);
        const endNode = nodes.find(node => node.id === endId);
        drawLineBetween(startNode, endNode);
    });
}

function drawLineBetween(startNode, endNode) {
    stroke(70, 170, 210, 120);
    strokeWeight(2);
    line(startNode.x, startNode.y, endNode.x, endNode.y);
}

function drawNodes() {
    nodes.forEach(node => {
        noStroke();
        fill(145, 235, 255);
        ellipse(node.x, node.y, 40, 26);
    });
}

function getConnectedNodes(node) {
    return connections
        .filter(([startId, endId]) => startId === node.id || endId === node.id)
        .map(([startId, endId]) => nodes.find(candidate =>
            candidate.id === (startId === node.id ? endId : startId)
        ));
}

function getSceneNavigationButtons() {
    const buttons = getConnectedNodes(selectedNode).map(node => ({ label: node.label, node }));

    if (selectedNode.group === "future") {
        buttons.push({ label: "Main Nodes", returnToGraph: true });
    }

    return buttons;
}

function drawSceneNavigation() {
    const buttons = getSceneNavigationButtons();
    const columns = width < 600 ? 2 : buttons.length;
    const rows = Math.ceil(buttons.length / columns);
    const panelHeight = rows * 44 + 16;
    const panelTop = height - panelHeight;
    const margin = 12;
    const gap = 8;
    const buttonWidth = (width - margin * 2 - gap * (columns - 1)) / columns;
    const buttonHeight = 36;

    sceneNavigationButtons = buttons.map((button, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        return {
            ...button,
            x: margin + column * (buttonWidth + gap),
            y: panelTop + 8 + row * 44,
            width: buttonWidth,
            height: buttonHeight
        };
    });

    noStroke();
    fill(8, 8, 28, 220);
    rect(0, panelTop, width, panelHeight);
    textAlign(CENTER, CENTER);
    textSize(width < 600 ? 13 : 16);

    sceneNavigationButtons.forEach(button => {
        fill(145, 235, 255);
        rect(button.x, button.y, button.width, button.height, 6);
        fill(8, 8, 28);
        text(button.label, button.x + button.width / 2, button.y + button.height / 2);
    });
}

function openScene(node) {
    selectedNode = node;
    redraw();
}

function returnToNodeGraph() {
    selectedNode = null;
    sceneNavigationButtons = [];
    redraw();
}

function getClickedNode() {
    return nodes.find(node => {
        const radiusX = 20;
        const radiusY = 13;
        const distanceX = mouseX - node.x;
        const distanceY = mouseY - node.y;
        return (distanceX * distanceX) / (radiusX * radiusX) +
            (distanceY * distanceY) / (radiusY * radiusY) <= 1;
    }) || null;
}

function mousePressed() {
    if (selectedNode) {
        const clickedButton = sceneNavigationButtons.find(button =>
            mouseX >= button.x && mouseX <= button.x + button.width &&
            mouseY >= button.y && mouseY <= button.y + button.height
        );
        if (clickedButton) {
            if (clickedButton.returnToGraph) {
                returnToNodeGraph();
            } else {
                openScene(clickedButton.node);
            }
        }
        return;
    }

    const clickedNode = getClickedNode();
    if (clickedNode) {
        openScene(clickedNode);
    }
}

function keyPressed() {
    if (key === "Escape" && selectedNode) {
        returnToNodeGraph();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    createNodes();
    redraw();
}