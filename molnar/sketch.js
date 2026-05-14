const DIM = 10
let s

function shape(x, y, s) {
    const numShapes = random(4, 7)
    stroke(255)
    noFill()
    for (let i = 0; i < numShapes; i++) {
        beginShape()
        vertex(x     + random(-5, 5), y     + random(-5, 5))
        vertex(x + s + random(-5, 5), y     + random(-5, 5))
        vertex(x + s + random(-5, 5), y + s + random(-5, 5))
        vertex(x     + random(-5, 5), y + s + random(-5, 5))
        endShape()
    }
}

function setup() {
    createCanvas(500, 500);
    s = width / DIM
}

function draw() {
    background(50);

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = s * i
            const y = s * j
            shape(x, y, s)
        }
    }
}
