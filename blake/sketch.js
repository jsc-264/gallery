const DIM = 5
let tWidth

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(220);

    tWidth = width / DIM

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = tWidth * i
            const y = tWidth * j

            rect(x, y, tWidth)
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth * 0.9, windowHeight * 0.9)
}