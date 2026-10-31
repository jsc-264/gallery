let lines = 15

function setup() {
    createCanvas(800, 600);
    noStroke()
}

function draw() {
    background(220);

    for (let h = lines; h < height; h += height / lines) {
        let r = map(h, lines, height, 0, 100)
        let g = map(h, lines, height, 50, 150)
        fill(r, g, 0)
        beginShape()
        for (let x = 0; x < width; x++) {
            let n = noise(((x + frameCount/2) / 100) + h*1000)
            let range = map(h, 0, height, 100, 10)
            let y = map(n, 0, 1, h - range, h + range) + 100
            vertex(x, y)
        }

        vertex(width, height)
        vertex(0, height)
        endShape(CLOSE)
    }
}
