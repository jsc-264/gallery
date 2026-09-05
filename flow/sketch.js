const FIELD_DIM = 20

function setup() {
    let dim = min(windowWidth, windowHeight)
    createCanvas(dim, dim);
    angleMode(DEGREES)
}

function draw() {
    background(220);
}

function windowResized() {
    let dim = min(windowWidth, windowHeight)
    resizeCanvas(dim, dim);
}