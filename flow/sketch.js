const NOISE_DIM = 100
let noiseField

function makeNoiseField() {
    let field = []
    for (let j = 0; j < NOISE_DIM; j++) {
        let row = []
        for (let i = 0; i < NOISE_DIM; i++) {
            const w = width / NOISE_DIM
            const x = w * i
            const y = w * j
            let n = noise(x / 100, y / 100)
            row.push(n)
        }

        field.push(row)
    }

    return field
}

function setup() {
    let dim = min(windowWidth, windowHeight)
    createCanvas(dim, dim);
    noiseField = makeNoiseField()
}

function draw() {
    background(220);

    for (let j = 0; j < noiseField.length; j++) {
        for (let i = 0; i < noiseField[0].length; i++) {
            const w = width / NOISE_DIM
            const x = w * i
            const y = w * j
            const n = noiseField[i][j]
            const col = n * 255
            fill(col)
            rect(x, y, w)
        }
    }

    noLoop()
}

function windowResized() {
    let dim = min(windowWidth, windowHeight)
    resizeCanvas(dim, dim);
}