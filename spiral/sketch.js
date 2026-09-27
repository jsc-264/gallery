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
    currP = {
        x: 0,
        y: 0,
        s: 0
    }
}

function draw() {
    background(220);
    // image(img, 0, 0, width, height)

    push()
    translate(0, 0)
    for (let _ = 0; _ < 2; _++) {
        points.push(currP)

        const x = rad * cos(theta)
        const y = rad * sin(theta)

        const pix = img.get(x, y)
        const bright = brightness(pix)
        const s = map(bright, 0, 100, 0.1, 5)
        print(bright)

        currP = {
            x: x,
            y: y,
            s: s
        }

        noFill()
        for (let i = 0; i < points.length-1; i++) {
            strokeWeight(points[i].s)
            line(points[i].x, points[i].y, points[i+1].x, points[i+1].y,)
        }

        theta += .2
        rad += .2
    }

    const end = points[points.length - 1]
    const d = dist(end.x, end.y, 0, 0)
    if (d > width) noLoop()

    pop()
}
