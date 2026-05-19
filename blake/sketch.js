const DIM = 5
let tWidth

function concentricCircles(x, y, w) {
    const layers = 3
    const black = color(0)
    const white = color(255)
    let currentFill = random([black, white])

    fill(currentFill)
    rect(x, y, w, w)

    push()
    translate(x + w / 2, y + w / 2)
    for (let i = layers; i > 0; i--){
        if (currentFill == black){
            currentFill = white
        } else {
            currentFill = black
        }

        fill(currentFill)
        circle(0, 0, i*w/layers)
    }
    pop()
}

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
            concentricCircles(x, y, tWidth)
        }
    }
    noLoop()
}

function windowResized() {
    resizeCanvas(windowWidth * 0.9, windowHeight * 0.9)
}