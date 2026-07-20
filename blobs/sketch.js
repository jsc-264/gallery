const defaultSpacing = 14
let spacing = defaultSpacing

const numBlobs = 40

const defaultRad = 30
let rad = defaultRad

let nz = 0

let noiseOffX
let noiseOffY

let startCol
let endCol

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB)

    noiseOffX = width/2
    noiseOffY = height/2

    startCol = color("#b00808")
    endCol = color("#960096")

    angleMode(DEGREES);
    noFill()
}

function draw() {
    background("#c0c1d3")

    push()
    translate(width/2, height/2)

    let blobs = []
    for (let i = 0; i < numBlobs; i++) {
        let blob = []
        let res = map(i, 0, numBlobs, 20, 3)
        for (let a = 0; a < 360; a+=res) {
            const nx = (rad * cos(a) + noiseOffX) / rad
            const ny = (rad * sin(a) + noiseOffY) / rad
            const nVal = noise(nx, ny, nz)

            const change = map(nVal, 0, 1, -rad / 3, rad / 3)
            const pRad = rad + change

            const x = pRad * cos(a)
            const y = pRad * sin(a)

            blob.push({ x: x, y: y })
        }
        blobs.push(blob)
        rad += spacing
        spacing -= 0.2
    }

    strokeWeight(3)
    for (let i = 0; i < blobs.length; i++) {
        const t = map(i, 0, blobs.length, 0, 1)
        const col = lerpColor(startCol, endCol, t)
        stroke(col)
        beginShape()
        for (let p of blobs[i]) {
            vertex(p.x, p.y)
        }
        endShape(CLOSE)
    }

    pop()

    rad = defaultRad
    nz += 0.02
    spacing = defaultSpacing
}

function mouseDragged(){
    noiseOffX = noise(mouseX/1000, nz) * 1000
    noiseOffY = noise(mouseY/1000, nz) * 1000
}

function touchMoved() {
    for (let touch of touches){
        noiseOffX = noise(touch.x/1000, nz) * 1000
        noiseOffY = noise(touch.y/1000, nz) * 1000
    }
}