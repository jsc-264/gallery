const DIM = 10
let w

function setup() {
    createCanvas(600, 600);
    w = width/DIM
}

function draw() {
    background(220);
    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = w * i
            const y = w * j
            rect(x, y, w)
        }
    }
}
