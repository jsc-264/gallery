const NOISE_DIM = 20
let vectorField
let w

let p

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
    p = new Particle(width/2, height/2, 40)
}

function draw() {
    background(220);
    p.render()
}

function windowResized() {
    let dim = min(windowWidth, windowHeight)
    resizeCanvas(dim, dim);
}