const DIM = 10
let s

let colours

function shape(x, y, s) {
    const numShapes = random(1, 7)
    const wiggle = 10
    stroke(random(colours))
    noFill()
    for (let i = 0; i < numShapes; i++) {
        beginShape()
        vertex(x + random(-wiggle, wiggle), y + random(-wiggle, wiggle))
        vertex(x + sx + random(-wiggle, wiggle), y + random(-wiggle, wiggle))
        vertex(x + sx + random(-wiggle, wiggle), y + sy + random(-wiggle, wiggle))
        vertex(x + random(-wiggle, wiggle), y + sy + random(-wiggle, wiggle))
        endShape(CLOSE)
    }
}

function setup() {
    createCanvas(windowWidth * 0.9, windowHeight * 0.9);
    sx = width / DIM * 0.9
    sy = height / DIM * 0.9

    colours = [
        // red, green, cyan, yellow, pink
        color(255, 0, 0),
        color(0, 255, 0),
        color(0, 255, 255),
        color(255, 255, 0),
        color(255, 0, 255)
    ]
}

function draw() {
    background(30);

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = (sx * i) + sx / 2
            const y = (sy * j) + sy / 2
            shape(x, y, s)
        }
    }

    noLoop()
}

function keyPressed(){
    if (key == " "){
        redraw()
    }
}
