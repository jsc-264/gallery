const DIM = 10
let w

function setup() {
    createCanvas(500, 500);
    w = width / DIM
}

function draw() {
    background(220);

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = w * i
            const y = w * j

            stroke(0)
            strokeWeight(5)
            point(x, y)
        }
    }
}
