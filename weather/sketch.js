const DIM = 20
let w

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 255, 255)
    w = width / DIM
}

function draw() {
    background(220);

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = i * w
            const y = j * w
            
            rect(x, y, w)
        }
    }

    noLoop()
}
