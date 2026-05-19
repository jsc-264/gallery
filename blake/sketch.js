const DIM = 5
let tWidth

function randCol(){
    return color(random(255), random(255), random(255))
}

function getColorPair(){
    let col1, col2
    if (random(1) < 0.5) {
        col1 = randCol()
        col2 = randCol()
    } else {
        col1 = color(0)
        col2 = color(255)
    }

    return [col1, col2]
}

function concentricCircles(x, y, w) {
    const layers = 3

    const [col1, col2] = getColorPair()
    let currentFill = random([col1, col2])

    push()
    fill(currentFill)
    rect(x, y, w, w)

    translate(x + w / 2, y + w / 2)
    for (let i = layers; i > 0; i--){
        if (currentFill == col1){
            currentFill = col2
        } else {
            currentFill = col1
        }

        fill(currentFill)
        circle(0, 0, i*w/layers)
    }
    pop()
}

function checker(x, y, w){
    const CHECKERDIM = 4
    const [col1, col2] = getColorPair()

    push()
    translate(x, y)
    for (let j = 0; j < CHECKERDIM; j++) {
        for (let i = 0; i < CHECKERDIM; i++) {
            if ((i + j) % 2 == 0){
                fill(col1)
            } else {
                fill(col2)
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