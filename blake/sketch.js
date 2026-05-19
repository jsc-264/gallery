const DIM = 5
let tWidth

function concentricCircles(x, y, w) {
    const layers = 3
    const black = color(0)
    const white = color(255)
    let currentFill = random([black, white])

    push()
    fill(currentFill)
    rect(x, y, w, w)

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

function checker(x, y, w){
    const CHECKERDIM = 4
    const black = color(0)
    const white = color(255)

    push()
    translate(x, y)
    for (let j = 0; j < CHECKERDIM; j++) {
        for (let i = 0; i < CHECKERDIM; i++) {
            if ((i + j) % 2 == 0){
                fill(black)
            } else {
                fill(white)
            }

            rect(i * w / CHECKERDIM, j * w / CHECKERDIM, w / CHECKERDIM)
        }
    }
    pop()
}

function setup() {
    createCanvas(600, 600);
    noStroke()
}

function draw() {
    background(220);

    tWidth = width / DIM

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = tWidth * i
            const y = tWidth * j

            const pattern = random([
                concentricCircles,
                checker
            ])

            pattern(x, y, tWidth)
        }
    }
    noLoop()
}

function windowResized() {
    resizeCanvas(windowWidth * 0.9, windowHeight * 0.9)
}