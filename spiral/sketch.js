let img;
let points = []
let currP
let theta = 0
let rad = 0

async function setup() {
    createCanvas(500, 500);
    img = await loadImage("./assets/parrot.jpg")
    img.resize(100, 100)
    noSmooth()
    currP = createVector(0, 0)
}

function draw() {
    background(220);
    // image(img, 0, 0, width, height)

    push()
    translate(width / 2, height / 2)
    for (let i = 0; i < 2; i++) {
        points.push(currP)

        const x = rad * cos(theta)
        const y = rad * sin(theta)

        currP = createVector(x, y)

        noFill()
        beginShape()
        for (let p of points) {
            vertex(p.x, p.y)
        }
        endShape()

        theta += .1
        rad += .1
    }

    const end = points[points.length - 1]
    const d = dist(end.x, end.y, 0, 0)
    if (d > width/2) noLoop()

    pop()
    print("run")
}
