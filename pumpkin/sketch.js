const DIM = 10
let w

function pumpkin(x, y, w, res = 10) {
    const eyeR = 5
    const mouthW = w / 2 + eyeR * 2
    push()
    translate(x, y)
    fill("orange")
    rect(0, 0, w)

    // fill(0)
    // left eye
    circle(w / 4, 1.3 * w / 4, eyeR * 2)
    // right eye
    circle(3 * w / 4, 1.3 * w / 4, eyeR * 2)
    // mouth

    let mouthPoints = []

    for (let i = 0; i <= res; i++) {
        mouthPoints.push({ x: mouthW / res * i, y: random(-w / 10, w / 10) })
    }

    push()
    translate(w / 4 - eyeR, 2.5 * w / 4,)
    beginShape()
    for (let i = 0; i <= mouthPoints.length-1; i++) {
        const p = mouthPoints[i]
        vertex(p.x, p.y)
    }

    for (let i = mouthPoints.length-1; i > 0; i--) {
        const p = mouthPoints[i]
        vertex(p.x, p.y + (eyeR * 2 + random(-eyeR/1.1, eyeR/1.1)))
    }
    endShape(CLOSE)
    pop()
    // rect(w / 4 - eyeR, 2.5 * w / 4, mouthW, eyeR*2)
    pop()
}

function setup() {
    createCanvas(600, 600);
    w = width / DIM
}

function draw() {
    background(220);
    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = w * i
            const y = w * j
            pumpkin(x, y, w)
        }
    }
    noLoop()
}
