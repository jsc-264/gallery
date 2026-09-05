const DIM = 50
let res

let field

const NUM_PARTICLES = 500
let particles = []

function makeField(){
    let field = new Array(DIM*DIM)
    for (let y = 0; y < DIM; y++) {
        for (let x = 0; x < DIM; x++) {
            const n = noise(x / 10, y / 10)
            const angle = n * TWO_PI
            const vec = p5.Vector.fromAngle(angle)
            const index = x + y * DIM
            field[index] = vec
        }
    }

    return field
}

function setup() {
    let minDim = min(windowWidth, windowHeight)
    createCanvas(minDim, minDim);
    res = width / DIM
    field = makeField()

    for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(new Particle(random(width), random(height), 1))
    }
}

function draw() {
    background(220);

    for (let p of particles){
        p.update()
        p.follow(field)
        p.render()
    }
}

function windowResized() {
    let minDim = min(windowWidth, windowHeight)
    resizeCanvas(minDim, minDim);
}