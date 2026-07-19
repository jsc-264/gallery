let rad = 100

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    noFill()
}

function draw() {
    beginShape()
    for (let a = 0; a < 360; a++){
        const nx = (rad * cos(a) + width/2)/50
        const ny = (rad * sin(a) + height/2)/50
        const nVal = noise(nx, ny)

        const change = map(nVal, 0, 1, -20, 20)
        const pRad = rad + change

        const x = pRad * cos(a) + width / 2
        const y = pRad * sin(a) + height / 2

        vertex(x, y)
    }
    endShape(CLOSE)
    noLoop()
}