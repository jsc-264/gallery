let rad = 10
let nz = 0

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    noFill()
}

function draw() {
    background(200)

    let blobs = []
    for (let i = 0; i < 10; i++) {
        let blob = []
        for (let a = 0; a < 360; a++) {
            const nx = (rad * cos(a) + width / 2) / 75
            const ny = (rad * sin(a) + height / 2) / 75
            const nVal = noise(nx, ny, nz)

            const change = map(nVal, 0, 1, -rad / 5, rad / 5)
            const pRad = rad + change

            const x = pRad * cos(a) + width / 2
            const y = pRad * sin(a) + height / 2

            blob.push({ x: x, y: y })
        }
        blobs.push(blob)
        rad += 10
    }

    for (let blob of blobs) {
        beginShape()
        for (let p of blob) {
            vertex(p.x, p.y)
        }
        endShape(CLOSE)
    }

    rad = 50
    nz+=0.03
}