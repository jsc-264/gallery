const DIM = 20
let w

let hot, cold

function setup() {
    createCanvas(600, 600);
    w = width / DIM

    hot = color(255, 0, 0)
    cold = color(0, 0, 255)
}

function draw() {
    background(220);

    for (let j = 0; j < DIM; j++) {
        const long = map(j, 0, DIM, -180, 180)
        for (let i = 0; i < DIM; i++) {
            const x = i * w
            const y = j * w

            const lat = map(i, 0, DIM, -90, 90)
            const temp = random(0, 30)

            const amt = map(temp, 0, 30, 0, 1)
            const col = lerpColor(cold, hot, amt)
            fill(col)
            rect(x, y, w)
        }
    }

    noLoop()
}
