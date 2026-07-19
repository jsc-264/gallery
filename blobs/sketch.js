let rad = 100

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES)
}

function draw() {
    background(220);
    push()

    translate(width/2, height/2)
    beginShape()
    for (let a = 0; a < 360; a++){
        const x = rad * cos(a)
        const y = rad * sin(a)

        vertex(x, y)
    }
    endShape(CLOSE)

    pop()
}
