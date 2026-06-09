let r = 100
let theta = 0

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(50);
    translate(width / 2, height / 2)

    const x = r * cos(theta)
    const y = r * sin(theta)

    circle(x, y, 20)

    theta += 0.1
}
