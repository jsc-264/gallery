const DIM = 50
let res

let field

const NUM_PARTICLES = 2000
let particles = []

let z = 0

function makeField(z) {
    let field = new Array(DIM * DIM)
    for (let y = 0; y < DIM; y++) {
        for (let x = 0; x < DIM; x++) {
            const n = noise(x / 10, y / 10, z)
            const angle = map(n, 0, 1, 0, TWO_PI-0.1)
            const vec = p5.Vector.fromAngle(angle)
            const index = x + y * DIM
            field[index] = vec
        }
    }

    return field
}

function setup() {
    let minDim = min(windowWidth, windowHeight)
    createCanvas(minDim, minDim, P2D);
    colorMode(HSL)
    res = width / DIM
    for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(new Particle(random(width), random(height), 2))
    }
}

function draw() {
    background(0, 0, 5);

    field = makeField(z)
    z+=0.01

    for (let p of particles) {
        p.update()
        p.follow(field)
        p.render()
    }

    particles.push(new Particle(random(width), random(height), 2))
    particles = particles.slice(1)
    // noLoop()
}

function windowResized() {
    let minDim = min(windowWidth, windowHeight)
    resizeCanvas(minDim, minDim);
}