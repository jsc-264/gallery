let start = 0
let res = 10

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);

    beginShape()
    for (let i = start; i < start + res + 1; i++) {
        const x = width / res * i
        const y = height / 2

        vertex(x, y)
    }
    endShape()
}
