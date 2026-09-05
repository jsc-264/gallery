const DIM = 50
let res

let field

const NUM_PARTICLES = 10
let particles = []

function setup() {
    let minDim = min(windowWidth, windowHeight)
    createCanvas(minDim, minDim);
    res = width / DIM
    field = new Array(DIM*DIM)

    for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(new Particle(100, 100, 10))
    }
}

function draw() {
    background(220);

    for (let y = 0; y < DIM; y++) {
        for (let x = 0; x < DIM; x++) {
            const n = noise(x/10, y/10)
            const angle = n * TWO_PI
            const vec = p5.Vector.fromAngle(angle)
            const index = x + y * DIM
            field[index] = vec
            push()
            translate(x*res, y*res)
            rotate(vec.heading())
            line(0, 0, res, 0)
            pop()
        }
    }

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