const DIM = 5
let tWidth

let palette

function randCol() {
    return random(palette)
}

function getColorPair() {
    const r = random()
    const col1 = r < 0.7 ? randCol() : color(0)
    const col2 = r < 0.7 ? randCol() : color(255)

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
    for (let i = layers; i > 0; i--) {
        if (currentFill == col1) {
            currentFill = col2
        } else {
            currentFill = col1
        }

        fill(currentFill)
        circle(0, 0, i * w / layers)
    }
    pop()
}

function checker(x, y, w, checkerDim = 4) {
    const [col1, col2] = getColorPair()

    push()
    translate(x, y)
    for (let j = 0; j < checkerDim; j++) {
        for (let i = 0; i < checkerDim; i++) {
            if ((i + j) % 2 == 0) {
                fill(col1)
            } else {
                fill(col2)
            }

            rect(i * w / checkerDim, j * w / checkerDim, w / checkerDim)
        }
    }
    pop()
}

function filled(x, y, w) {
    fill(randCol())
    rect(x, y, w)
}

function sector(x, y, w) {
    const layers = 3
    const [col1, col2] = getColorPair()
    let currentFill = random([col1, col2])

    const choice = random([
        "TR", "BR", "BL", "TL"
    ])

    let cx, cy
    switch (choice) {
        case "TR":
            cx = 0
            cy = w
            startA = -HALF_PI
            endA = 0
            break;

        case "BR":
            cx = 0
            cy = 0
            startA = 0
            endA = HALF_PI
            break;

        case "BL":
            cx = w
            cy = 0
            startA = HALF_PI
            endA = PI
            break;

        case "TL":
            cx = w
            cy = w
            startA = PI
            endA = -HALF_PI
            break;

        default:
            break;
    }

    push()
    drawingContext.save()
    translate(x, y)

    fill(currentFill)
    rect(0, 0, w)

    drawingContext.clip()

    for (let i = layers; i > 1; i--) {
        if (currentFill == col1) {
            currentFill = col2
        } else {
            currentFill = col1
        }

        fill(currentFill)
        circle(cx, cy, i * w*2 / layers)
    }

    pop()
}

function setup() {
    createCanvas(600, 600);
    noStroke()

    palette = [
        color(219, 41, 13),
        color(227, 177, 27),
        color(235, 228, 30),
        color(14, 179, 33),
        color(73, 208, 245),
        color(19, 82, 209),
        color(130, 43, 207),
        color(201, 18, 143),
        color(122, 90, 13)
    ]
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
                checker,
                filled,
                sector
            ])

            pattern(x, y, tWidth)
        }
    }
    noLoop()
}

function windowResized() {
    resizeCanvas(windowWidth * 0.9, windowHeight * 0.9)
}