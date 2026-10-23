const DIM = 10
let w
let patch = []
let firstPass = true

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

function setup() {
    createCanvas(600, 600);
    colorMode(HSL)
    this.w = this.width / DIM

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = this.w * i
            const y = this.w * j
            patch.push(new Pumpkin(x, y, this.w))
        }
    }
    background(220);
}

function draw() {
    for (let p of patch){
        if (firstPass){
            p.render()
        } else {
            if (random() < .005){
                p.render()
            }
        }
    }
    if (firstPass){
        firstPass = false
    }
    // noLoop()
}

class Pumpkin{
    constructor(x, y, w){
        this.x = x
        this.y = y
        this.w = w
    }

    render(res = 10){
        const eyeR = 5
        const mouthW = this.w / 2 + eyeR * 2
        push()
        translate(this.x, this.y)
        fill(random(10, 40), random(40, 60), random(40, 60))
        rect(0, 0, this.w)
        fill(0)

        // fill(0)
        // left eye
        eye(this.w / 4, 1.3 * this.w / 4, eyeR)
        // right eye
        eye(3 * this.w / 4, 1.3 * this.w / 4, eyeR)
        // mouth
        mouth(this.w / 4 - eyeR, 2.5 * this.w / 4, mouthW, eyeR, res)
        pop()
    }
}
