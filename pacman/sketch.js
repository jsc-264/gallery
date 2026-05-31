const DIM = 10
let w

function setup() {
    const canvasDim = min(windowWidth, windowHeight) * 0.9
    createCanvas(canvasDim, canvasDim);
    w = width / DIM
}

function draw() {
    background(50);

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = w * i
            const y = w * j

            push()
            translate(x, y)

            if (random(1) < 0.4) {
                fill(255, 240, 19)
                circle(w/2, w/2, w)
            } else {
                fill(0, 0, 200)

                const cx = random([w/4, 3*w/4])
                const cy = random([w/4, 3*w/4])
                circle(cx, cy, w/2)
            }

            pop()
        }
    }

    noLoop()
}

function windowResized() {
    const canvasDim = min(windowWidth, windowHeight) * 0.9
    resizeCanvas(canvasDim, canvasDim);
}