function setup() {
    let dim = min(windowWidth, windowHeight)
    createCanvas(dim, dim);
}

function draw() {
    background(220);
}

function windowResized(){
    let dim = min(windowWidth, windowHeight)
    resizeCanvas(dim, dim);
}