const DIM = 50
let res

function setup() {
    let minDim = min(windowWidth, windowHeight)
    createCanvas(minDim, minDim);
    res = width / DIM
}

function draw() {
    background(220);

    for (let y = 0; y < DIM; y++) {
        for (let x = 0; x < DIM; x++) {
            const n = noise(x/10, y/10)
            const angle = n * TWO_PI
            const vec = p5.Vector.fromAngle(angle)
            push()
            translate(x*res, y*res)
            rotate(vec.heading())
            line(0, 0, res, 0)
            pop()
        }
    }
}

function windowResized() {
    let minDim = min(windowWidth, windowHeight)
    resizeCanvas(minDim, minDim);
}