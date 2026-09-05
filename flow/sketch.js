const DIM = 50
let res

function setup() {
    let minDim = min(windowWidth, windowHeight)
    createCanvas(minDim, minDim);
    angleMode(DEGREES)
    res = width / DIM
}

function draw() {
    background(220);

    for (let y = 0; y < DIM; y++) {
        for (let x = 0; x < DIM; x++) {
            const n = noise(x/10, y/10)
            const col = n * 255
            fill(col)
            rect(x * res, y * res, res)
        }
    }
}

function windowResized() {
    let minDim = min(windowWidth, windowHeight)
    resizeCanvas(minDim, minDim);
}