const DIM = 10
let w

let hotCol, coldCol

async function setup() {
    createCanvas(600, 600);
    w = width / DIM

    hotCol = color(255, 0, 0)
    coldCol = color(0, 0, 255)
}

function draw() {
    background(220);
}
