
/* Node Logic and Project Starting Point */

let nodes = [];
let selectedNode = null;
let activeScene = null;
let sceneNavigationButtons = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    createNodes();
}

function createNodes() {
    const centerX = width / 2;
    const centerY = height / 2;
    const rows = [centerY - 80, centerY, centerY + 80];
    const sceneById = {
        "life-1": lifeNode1,
        "life-2": lifeNode2,
        "computer science-1": computerScienceNode1,
        "computer science-2": computerScienceNode2,
        "computer science-3": computerScienceNode3,
        "future-3": futureNode
    };
    const groups = [
        { name: "life", offsetX: -240, offsetY: 40, rowIndexes: [0, 1] },
        { name: "computer science", offsetX: 0, offsetY: 0, rowIndexes: [0, 1, 2] },
        { name: "future", offsetX: 240, offsetY: -40, rowIndexes: [2] }
    ];

    nodes = [];
    groups.forEach(group => {
        group.rowIndexes.forEach(index => {
            const row = rows[index];
            const id = `${group.name}-${index + 1}`;
            nodes.push({
                id,
                group: group.name,
                x: centerX + group.offsetX,
                y: row + group.offsetY,
                story: `${group.name}: story ${index + 1}`,
                scene: sceneById[id],
                visited: false
            });
        });
    });
}

function draw() {
    if (activeScene) {
        imageMode(CORNER);
        activeScene();
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

    for (let row = 0; row < 2; row += 1) {
        drawLineBetween(getNode("computer science", row), getNode("computer science", row + 1));
    }

    const lifeNodes = nodes.filter(node => node.group === "life");
    const computerScienceNodes = nodes.filter(node => node.group === "computer science");
    const futureNodes = nodes.filter(node => node.group === "future");

    lifeNodes.forEach(lifeNode => {
        computerScienceNodes.forEach(computerScienceNode => {
            drawLineBetween(lifeNode, computerScienceNode);
        });
    });

    computerScienceNodes.forEach(computerScienceNode => {
        futureNodes.forEach(futureNode => {
            drawLineBetween(computerScienceNode, futureNode);
        });
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
    return nodes.filter(candidate => {
        if (node.group === "life") {
            return candidate.group === "computer science";
        }

        if (node.group === "computer science") {
            if (candidate.group === "life" || candidate.group === "future") {
                return true;
            }

            const nodeNumber = Number(node.id.split("-").pop());
            const candidateNumber = Number(candidate.id.split("-").pop());
            return candidate.group === "computer science" &&
                Math.abs(nodeNumber - candidateNumber) === 1;
        }

        return node.group === "future" && candidate.group === "computer science";
    });
}

function getSceneNavigationButtons() {
    if (!selectedNode) {
        return [];
    }

    const buttons = getConnectedNodes(selectedNode).map(node => ({
        label: node.group === "life"
            ? `Life ${node.id.split("-").pop()}`
            : node.group === "computer science"
                ? `CS ${node.id.split("-").pop()}`
                : "Future",
        node
    }));

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
        const isHovered = mouseX >= button.x && mouseX <= button.x + button.width &&
            mouseY >= button.y && mouseY <= button.y + button.height;
        fill(isHovered ? color(255, 220, 120) : color(145, 235, 255));
        rect(button.x, button.y, button.width, button.height, 6);
        fill(8, 8, 28);
        text(button.label, button.x + button.width / 2, button.y + button.height / 2);
    });
}

function openScene(node) {
    selectedNode = node;
    selectedNode.visited = true;
    activeScene = node.scene;
    redraw();
}

function returnToNodeGraph() {
    activeScene = null;
    selectedNode = null;
    sceneNavigationButtons = [];
    redraw();
}

function getNode(groupName, row) {
    return nodes.find(node => node.group === groupName && node.id.endsWith(`-${row + 1}`));
}

function getHoveredNode() {
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
    if (activeScene) {
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

    const clickedNode = getHoveredNode();
    if (clickedNode) {
        openScene(clickedNode);
    }
}

function keyPressed() {
    if (key === "Escape" && activeScene) {
        returnToNodeGraph();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    createNodes();
    redraw();
}