function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);

    beginShape()
    for (let x = 0; x < width; x++) {
        let n = noise((x+frameCount)/100)
        let y = map(n, 0, 1, 0, height)
        vertex(x, y)
    }

    vertex(width, height)
    vertex(0, height)
    endShape(CLOSE)
}
