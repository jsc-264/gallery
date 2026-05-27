const DIM = 5
let tWidth

let palette

function flipColour(current, col1, col2){
    if (current == col1) {
        current = col2
    } else {
        current = col1
    }

    return current
}

function randCol() {
    return random(palette)
}

function getColorPair() {
    const chance = 0.5
    const r = random()
    const col1 = r < chance ? randCol() : color(0)
    const col2 = r < chance ? randCol() : color(255)

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
        currentFill = flipColour(currentFill, col1, col2)

        fill(currentFill)
        circle(0, 0, i * w / layers)
    }
    pop()
}

function checker(x, y, w) {
    const CHECKERDIM = random([3, 4])
    const [col1, col2] = getColorPair()

    push()
    translate(x, y)
    for (let j = 0; j < CHECKERDIM; j++) {
        for (let i = 0; i < CHECKERDIM; i++) {
            if ((i + j) % 2 == 0) {
                fill(col1)
            } else {
                fill(col2)
            }

            rect(i * w / CHECKERDIM, j * w / CHECKERDIM, w / CHECKERDIM)
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
        currentFill = flipColour(currentFill, col1, col2)
        fill(currentFill)
        circle(cx, cy, i * w*2 / layers)
    }

    pop()
}

function doubleTriangle(x, y, w){
    const [col1, col2] = getColorPair()
    let currentFill = random([col1, col2])

    push()
    translate(x, y)

    fill(currentFill)
    rect(0, 0, w)

    currentFill = flipColour(currentFill, col1, col2)
    fill(currentFill)

    if (random(1) < 0.5){
        triangle(0, 0, w, w, 0, w)
    } else {
        triangle(w, 0, 0, w, w, w)
    }
    pop()
}

function setup() {
    const d = min(windowWidth, windowHeight)*0.9
    createCanvas(d, d);
    frameRate(1)
    noStroke()

    palette = [
        color(219, 41, 13), // red
        color(227, 177, 27), // orange
        color(235, 228, 30), // yellow
        color(14, 179, 33), // green
        color(73, 208, 245), // light blue
        color(19, 82, 209), // dark blue
        color(130, 43, 207), // purple
        color(201, 18, 143), // pink
        color(122, 90, 13) // brown
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
                sector,
                doubleTriangle
            ])

            pattern(x, y, tWidth)
        }
    }
}

function windowResized() {
    const d = min(windowWidth, windowHeight)*0.9
    resizeCanvas(d, d);
}