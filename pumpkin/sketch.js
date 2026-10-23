const DIM = 10
let w

function mouth(x, y, w, h, res){
    let mouthPoints = []

    for (let i = 0; i <= res; i++) {
        mouthPoints.push({ x: w / res * i, y: random(-w / 10, w / 10) })
    }

    push()
    translate(x, y)
    beginShape()
    for (let i = 0; i <= mouthPoints.length - 1; i++) {
        const p = mouthPoints[i]
        vertex(p.x, p.y)
    }

    for (let i = mouthPoints.length - 1; i > 0; i--) {
        const p = mouthPoints[i]
        vertex(p.x, p.y + (h * 2 + random(-h / 1.1, h / 1.1)))
    }
    endShape(CLOSE)
    pop()
}

function eye(x, y, r, points = random(5, 20)){
    push()
    translate(x, y)
    beginShape()
    for (let a = 0; a < TWO_PI; a+=TWO_PI/points){
        const newR = r + random(-2, 2)
        const x = newR * cos(a)
        const y = newR * sin(a)

        vertex(x, y)
    }
    endShape(CLOSE)
    pop()
}

function pumpkin(x, y, w, res = 10) {
    const eyeR = 5
    const mouthW = w / 2 + eyeR * 2
    push()
    translate(x, y)
    fill("orange")
    rect(0, 0, w)

    // fill(0)
    // left eye
    eye(w / 4, 1.3 * w / 4, eyeR)
    // right eye
    eye(3 * w / 4, 1.3 * w / 4, eyeR)
    // mouth
    mouth(w / 4 - eyeR, 2.5 * w / 4, mouthW, eyeR, res)
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
