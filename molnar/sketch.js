const DIM = 10
let s

function setup() {
    createCanvas(500, 500);
    s = width/DIM
}

function draw() {
    background(50);

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = s * i
            const y = s * j
            square(x, y, s)
        }
    }
}
