const NOISE_DIM = 20
let vectorField
let w

function makeVectorField() {
    let field = []
    for (let j = 0; j < NOISE_DIM; j++) {
        let row = []
        for (let i = 0; i < NOISE_DIM; i++) {
            const x = w * i
            const y = w * j
            const div = 4000
            let n = noise(x / div, y / div)
            let angle = map(n, 0, 1, 0, 180)
            let vec = p5.Vector.fromAngle(angle)
            row.push(vec)
        }

        field.push(row)
    }

    return field
}

function setup() {
    let dim = min(windowWidth, windowHeight)
    createCanvas(dim, dim);
    w = width / NOISE_DIM
    vectorField = makeVectorField()
}

function draw() {
    background(220);
    for (let j = 0; j < vectorField.length; j++) {
        for (let i = 0; i < vectorField[j].length; i++) {
            const x = w * i
            const y = w * j
            let vec = vectorField[i][j]
            push()
            translate(x, y)
            rotate(vec.heading())
            line(0, 0, w, 0)
            pop()
        }
    }

    noLoop()
}

function windowResized() {
    let dim = min(windowWidth, windowHeight)
    resizeCanvas(dim, dim);
}