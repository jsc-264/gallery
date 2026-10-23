const DIM = 10
let w

function pumpkin(x, y, w) {
    const eyeR = 5
    push()
    translate(x, y)
    fill("orange")
    rect(0, 0, w)

    // left eye
    circle(w / 4, 1.3 * w / 4, eyeR*2)
    // right eye
    circle(3 * w / 4, 1.3 * w / 4, eyeR*2)
    // mouth
    rect(w / 4 - eyeR, 2.5 * w / 4, w / 2 + eyeR*2, eyeR*2)
    pop()
}

function setup() {
    createCanvas(600, 600);
    w = width / DIM
}

function draw() {
    background(220);
    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = w * i
            const y = w * j
            pumpkin(x, y, w)
        }
    }
}
