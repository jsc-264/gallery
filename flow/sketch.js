const FIELD_DIM = 20
let angleField
let w

let particles = []
let numParticles = 1

function makeAngleField() {
    let field = []
    for (let j = 0; j < FIELD_DIM; j++) {
        let row = []
        for (let i = 0; i < FIELD_DIM; i++) {
            const x = w * j
            const y = w * i
            const div = 200
            let n = noise(x / div, y / div)
            let angle = map(n, 0, 1, 0, 180)
            row.push(angle)
        }

        field.push(row)
    }

    return field
}

function setup() {
    let dim = min(windowWidth, windowHeight)
    createCanvas(dim, dim);
    angleMode(DEGREES)
    w = width / FIELD_DIM
    angleField = makeAngleField()
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(random(width), random(height), 20))
    }
}

function draw() {
    background(220);
    for (let i = 0; i < angleField.length; i++) {
        for (let j = 0; j < angleField[0].length; j++) {
            const x = w * i
            const y = w * j
            let angle = floor(angleField[i][j])
            // rect(x, y, w)

            push()
            translate(x + w / 2, y + w / 2)
            rotate(angle)
            line(0, 0, 10, 0)
            pop()
        }
    }

    for (let p of particles) {
        p.render()
        p.setVel(angleField)
        p.update()
    }
}

function windowResized() {
    let dim = min(windowWidth, windowHeight)
    resizeCanvas(dim, dim);
}