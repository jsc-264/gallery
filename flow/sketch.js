const FIELD_DIM = 20
let vectorField
let w

let p

function makeVectorField() {
    let field = []
    for (let j = 0; j < FIELD_DIM; j++) {
        let row = []
        for (let i = 0; i < FIELD_DIM; i++) {
            const x = w * j
            const y = w * i
            const div = 4000
            let n = noise(x / div, y / div)
            let angle = map(n, 0, 1, 0, 160)
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
    w = width / FIELD_DIM
    vectorField = makeVectorField()
    p = new Particle(width / 2, height / 2, 40)
}

function draw() {
    background(220);
    p.setVel(vectorField)
    p.update()
    p.render()

    for (let j = 0; j < vectorField.length; j++) {
        for (let i = 0; i < vectorField[0].length; i++) {
            const x = w * i
            const y = w * j
            let vec = vectorField[i][j]
            push()
            translate(x, y)
            rotate(vec.heading())
            line(0, 0, 10, 0)
            pop()
        }
    }
}

function windowResized() {
    let dim = min(windowWidth, windowHeight)
    resizeCanvas(dim, dim);
}